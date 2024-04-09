import axios from "axios";
import { useCallback, useState } from "react";

import { Fill, FillCircle, LitStar, Pencil, PencilCircle, Star, XMark } from "@app/web/shared/assets";
import { Picker } from "@app/web/shared/components";

type StateProps = {
	color: string;
	content: string;
	favorite: number;
	id: number;
	title: string;
};

type NoteCardProps = {
	data: StateProps;
	onChange: () => void;
	onDelete: (index: number) => void;
};

const NoteCard = (props: NoteCardProps) => {
	const { data, onChange, onDelete } = props;

	const [edit, setEdit] = useState({
		color: false,
		content: false,
	});

	const [state, setState] = useState(data);

	const cursor = edit.content ? "cursor-pointer" : "cursor-not-allowed";

	const FavoriteIcon = !state.favorite ? Star : LitStar;
	const FillIcon = !edit.color ? Fill : FillCircle;
	const Pencilcon = !edit.content ? Pencil : PencilCircle;

	const handleEdit = (index: string, value?: boolean) => {
		if (index === "color" && !edit.content) return;
		setEdit(prev => ({ ...prev, [index]: value ?? !prev[index] }));
	};

	const handleState = useCallback((index: string, value: string) => setState(prev => ({ ...prev, [index]: value })), []);

	const handleSubmit = () => {
		const url = `http://localhost:8000/api/change-note/${state.id}`;
		axios.put(url, state).finally(() => {
			handleEdit("content", false);
			onChange();
		});
	};

	return (
		<div className="w-98 h-99 max-sm:w-96p flex flex-col rounded-3xl" style={{ backgroundColor: state.color }}>
			<div className="text-font flex items-center justify-between gap-2 border-b border-slate-200 px-6 py-3">
				<>
					{edit.content ? (
						<input
							className="w-full rounded-md bg-slate-200/10 outline-none"
							onChange={({ target: { value } }) => handleState("title", value)}
							placeholder="Title"
							value={state.title}
						/>
					) : (
						<label className="text-base font-semibold">{state.title || "Blank note title!"}</label>
					)}
				</>

				<FavoriteIcon
					className={`min-h-6 min-w-6 ${cursor}`}
					onClick={() => {
						edit.content && setState(prev => ({ ...prev, favorite: prev.favorite ? 0 : 1 }));
						console.log(edit.content);
					}}
				/>
			</div>

			<div className="text-font flex flex-1 overflow-hidden p-2 px-6">
				<>
					{edit.content ? (
						<textarea
							className="size-full max-h-80 min-h-40 rounded-md bg-slate-200/20 outline-none"
							onChange={({ target: { value } }) => handleState("content", value)}
							placeholder="Note content"
							value={state.content}
						/>
					) : (
						<label>{state.content || "No contentThis is a standard text, shown to avoid leaving this space blank."}</label>
					)}
				</>
			</div>

			<div className="flex items-center justify-between px-4 py-2">
				<div className="flex gap-2">
					<Pencilcon
						className="h-8 w-8 cursor-pointer"
						onClick={() => {
							!edit.content ? handleEdit("content") : handleSubmit();
						}}
					/>

					<div className="relative gap-2">
						<FillIcon className={`h-8 w-8 ${cursor}`} onClick={() => handleEdit("color")} />
						{edit.color && (
							<Picker
								onChange={color => {
									handleState("color", color);
									handleEdit("color", false);
								}}
							/>
						)}
					</div>
				</div>

				<XMark
					className={`${cursor}`}
					onClick={() => {
						if (edit.content) onDelete(data.id);
					}}
				/>
			</div>
		</div>
	);
};

export { NoteCard, type NoteCardProps };

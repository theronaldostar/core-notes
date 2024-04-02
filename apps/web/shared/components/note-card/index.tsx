import { useEffect, useState } from "react";

import { Fill, FillCircle, LitStar, Pencil, PencilCircle, Star, XMark } from "@app/web/shared/assets";

import { Picker } from "@app/web/shared/components";

type NoteCardProps = {
	data: { title: string; content: string; color: string; favorite: boolean };
	index: number;
	onDelete: (index: number) => void;
};

const NoteCard = (props: NoteCardProps) => {
	const { data, index, onDelete } = props;

	const [state, setState] = useState({} as NoteCardProps["data"]);

	const [editable, setEditable] = useState({
		color: false,
		content: false,
	});

	useEffect(() => {
		setState(data);
	}, [data]);

	const FavoriteIcon = !state.favorite ? Star : LitStar;
	const FillIcon = !editable.color ? Fill : FillCircle;
	const Pencilcon = !editable.content ? Pencil : PencilCircle;

	const handleFavorite = () => {
		setState(prev => ({ ...prev, favorite: !prev.favorite }));
	};

	const handleChange = (index: string, value: string) => {
		setState(prev => ({ ...prev, [index]: value }));
	};

	return (
		<div className="w-98 h-99 max-sm:w-96p flex flex-col rounded-3xl" style={{ backgroundColor: state.color }}>
			<div className="text-font flex items-center justify-between gap-2 border-b border-slate-200 px-6 py-3">
				{editable.content ? (
					<input
						className="w-full rounded-md bg-slate-200/10 outline-none"
						onChange={({ target: { value } }) => {
							handleChange("title", value);
						}}
						placeholder="Title"
						value={state.title}
					/>
				) : (
					<label className="text-base font-semibold">{state.title}</label>
				)}
				<FavoriteIcon className="h-6 w-6 cursor-pointer" onClick={handleFavorite} />
			</div>

			<div className="text-font flex flex-1 overflow-hidden p-2 px-6">
				{editable.content ? (
					<textarea
						className="size-full max-h-80 min-h-40 rounded-md bg-slate-200/20 outline-none"
						onChange={({ target: { value } }) => {
							handleChange("content", value);
						}}
						placeholder="Note content"
						value={state.content}
					/>
				) : (
					<label>{state.content || "No content."}</label>
				)}
			</div>

			<div className="flex items-center justify-between px-4 py-2">
				<div className="flex gap-2">
					<Pencilcon
						className="h-8 w-8 cursor-pointer"
						onClick={() => {
							if (editable.content) console.log("edit", state);
							setEditable(prev => ({ ...prev, content: !prev.content }));
						}}
					/>

					<div className="relative gap-2">
						<FillIcon className="h-8 w-8 cursor-pointer" onClick={() => setEditable(prev => ({ ...prev, color: !prev.color }))} />

						{editable.color && (
							<Picker
								onChange={color => {
									setState(prev => ({ ...prev, color }));
									setEditable(prev => ({ ...prev, color: false }));
								}}
							/>
						)}
					</div>
				</div>

				<XMark onClick={() => onDelete(index)} />
			</div>
		</div>
	);
};

export { NoteCard, type NoteCardProps };

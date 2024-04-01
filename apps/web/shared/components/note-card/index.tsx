import { useEffect, useState } from "react";

import { Fill, LitStar, Pencil, Star, XMark } from "@app/web/shared/assets";

import { ColorPicker } from "@app/web/shared/components";

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

	const Favorite = !state.favorite ? Star : LitStar;

	const handleFavorite = () => {
		setState(prev => ({ ...prev, favorite: !prev.favorite }));
	};

	const handleChange = (index: string, value: string) => {
		setState(prev => ({ ...prev, [index]: value }));
	};

	return (
		<div className="w-98 max-h-99 max-md:w-96p flex h-full flex-col rounded-3xl p-2" style={{ backgroundColor: state.color }}>
			<div className="flex items-center justify-between border-b px-4 py-2">
				{editable.content ? (
					<input
						className="outline-none"
						onChange={({ target: { value } }) => {
							handleChange("title", value);
						}}
						placeholder="Title"
						value={state.title}
					/>
				) : (
					<label>{state.title}</label>
				)}
				<Favorite className="h-6 w-6 cursor-pointer" onClick={handleFavorite} />
			</div>

			<div className="flex flex-1">
				{editable.content ? (
					<textarea
						className="size-full bg-slate-200/20 outline-none"
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
					<Pencil
						className=""
						onClick={() => {
							if (editable.content) console.log("edit", state);
							setEditable(prev => ({ ...prev, content: !prev.content }));
						}}
					/>
					<div className="relative gap-2">
						<Fill onClick={() => setEditable(prev => ({ ...prev, color: !prev.color }))} />
						{editable.color && (
							<ColorPicker
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

export { NoteCard };

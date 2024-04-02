import axios from "axios";
import { useState } from "react";

import { LitStar, Star } from "@app/web/shared/assets";
import { colors } from "@app/web/shared/theme";

type NoteProps = {
	title: string;
	content: string;
	color: string;
	favorite: number;
};

type CreateProps = {
	onCreate: (note: NoteProps) => void;
};

const Create = (props: CreateProps) => {
	const { onCreate = () => {}, ...rest } = props;

	const [state, setState] = useState({
		title: "",
		content: "",
		color: colors.default,
		favorite: 0,
	});

	const Favorite = !state.favorite ? Star : LitStar;

	const handleChange = ({ target: { id, value } }) => setState(prev => ({ ...prev, [id]: value }));

	const handleFavorite = () => setState(prev => ({ ...prev, favorite: prev.favorite ? 0 : 1 }));

	const handleSubmit = () => {
		const url = "http://localhost:4000/create-note";
		axios
			.post(url, state)
			.then(({ data: { data } }) => onCreate(data))
			.finally(() => setState(prev => ({ ...prev, title: "", content: "", favorite: 0 })));
	};

	return (
		<div className="max-w-100 max-md:w-96p flex w-full flex-col gap-2" {...rest}>
			<article className="shadow-primary border-note-defaultflex-col overflow-hidden rounded border bg-white max-sm:rounded-3xl">
				<header className="flex items-center justify-between border-b px-4 py-2 max-sm:px-6">
					<input
						className="w-full font-semibold text-[#333333] outline-none"
						id="title"
						maxLength={100}
						onChange={handleChange}
						placeholder="Title"
						value={state.title}
					/>
					<Favorite className="h-5 w-5 cursor-pointer" onClick={handleFavorite} />
				</header>
				<main className="flex size-full px-4 py-2 max-sm:px-6">
					<textarea
						className="text-input flex max-h-24 min-h-14 flex-1 outline-none"
						id="content"
						maxLength={1000}
						onChange={handleChange}
						placeholder="Enter text for the body of your note!"
						value={state.content}
					/>
				</main>
			</article>

			{state.title && state.content && (
				<div className="flex items-center justify-end">
					<button className="font-semibold transition active:scale-90 active:opacity-60" onClick={handleSubmit}>
						Save!
					</button>
				</div>
			)}
		</div>
	);
};

export { Create };

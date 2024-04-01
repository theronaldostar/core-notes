import { useState } from "react";

import { LitStar, Star } from "@app/web/shared/assets";
import { colors } from "@app/web/shared/theme";

const Create = () => {
	const [state, setState] = useState({
		title: "",
		content: "",
		color: colors.default,
		favorite: false,
	});

	const Favorite = !state.favorite ? Star : LitStar;

	const handleFavorite = () => setState(prev => ({ ...prev, favorite: !prev.favorite }));

	return (
		<div className="max-w-100 max-md:w-96p shadow-primary border-note-default flex w-full flex-col overflow-hidden rounded border bg-white max-sm:rounded-3xl">
			<div className="flex items-center justify-between border-b px-4 py-2 max-sm:px-4">
				<input maxLength={100} className="w-full font-semibold text-[#333333] outline-none" placeholder="Title" />
				<Favorite className="h-5 w-5 cursor-pointer" onClick={handleFavorite} />
			</div>
			<div className="flex size-full px-4 py-2 max-sm:p-4">
				<textarea
					maxLength={1000}
					className="text-input flex max-h-24 min-h-14 flex-1 outline-none"
					placeholder="Enter text for the body of your note!"
				/>
			</div>
		</div>
	);
};

export { Create };

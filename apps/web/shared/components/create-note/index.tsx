import { useState } from "react";

import { LitStar, Star } from "@app/web/shared/assets";

const CreateNote = () => {
	const [state, setState] = useState({
		title: "",
		content: "",
		favorite: false,
	});

	const Favorite = !state.favorite ? Star : LitStar;

	const handleFavorite = () => setState(prev => ({ ...prev, favorite: !prev.favorite }));

	return (
		<div className="max-w-100 max-md:w-96p flex w-full flex-col rounded bg-white p-2">
			<div className="flex items-center gap-2 border-b">
				<input maxLength={100} className="w-full px-4 py-2 outline-none" placeholder="Title" />
				<Favorite className="h-8 w-8 cursor-pointer" onClick={handleFavorite} />
			</div>
			<textarea maxLength={1000} className="size-full max-h-24 min-h-14 p-2 outline-none" placeholder="Enter text for the body of your note!" />
		</div>
	);
};

export { CreateNote };

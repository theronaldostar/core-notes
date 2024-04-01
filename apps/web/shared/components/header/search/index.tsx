import { Search } from "@app/web/shared/assets";

const InputSearch = () => {
	return (
		<div className="shadow-primary border-border flex w-full min-w-max max-w-96 items-center rounded p-2">
			<input className="w-full outline-none" placeholder="Search notes" />
			<Search />
		</div>
	);
};

export { InputSearch };

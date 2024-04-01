"use client";
import { useCallback } from "react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

import { Search } from "@app/web/shared/assets";

type InputSearchProps = {
	onChange: (value: string) => void;
};

const InputSearch = (props: InputSearchProps) => {
	const { onChange } = props;

	const { replace } = useRouter();
	const pathname = usePathname();
	const searchParams = useSearchParams();

	const handleSearch = useCallback(
		(value: string) => {
			const search = new URLSearchParams(searchParams);
			if (value) search.set("search", value);
			else search.delete("search");
			replace(`${pathname}?${search.toString()}`);
		},
		[pathname, replace, searchParams],
	);

	return (
		<div className="shadow-primary border-note-default w-48p flex items-center rounded border p-2 py-1.5">
			<input
				className="text-input w-full text-xs leading-tight outline-none"
				placeholder="Search notes"
				onChange={({ target: { value } }) => {
					handleSearch(value);
					onChange(value);
				}}
				defaultValue={searchParams.get("search")}
			/>
			<Search className="h-4 w-4" />
		</div>
	);
};

export { InputSearch, type InputSearchProps };

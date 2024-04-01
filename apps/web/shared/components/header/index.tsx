import { useEffect, useState } from "react";
import Image from "next/image";

import { logo } from "@app/web/shared/assets";
import { InputSearch } from "@app/web/shared/components/header/search";

const Header = () => {
	const [state, setState] = useState({});

	useEffect(() => {}, [state]);

	const handleChange = () => {};

	return (
		<header className="flex w-full items-center gap-4 bg-white px-3 py-2 shadow-md">
			<div className="flex items-center gap-4">
				<Image src={logo} alt="app-logo" />
				<label className="text-[#455A64]">CoreNotes</label>
			</div>
			<InputSearch />
		</header>
	);
};

export default Header;
export { Header };

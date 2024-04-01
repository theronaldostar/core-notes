import Image from "next/image";

import { logo } from "@app/web/shared/assets";
import { InputSearch } from "@app/web/shared/components/header/search";
import { XIcon } from "@app/web/shared/assets/icon";

type HeaderProps = {
	onSearch?: (value: string) => void;
};

const Header = (props: HeaderProps) => {
	const { onSearch } = props;

	return (
		<header className="shadow-secondary flex w-full items-center justify-between bg-white px-8 py-2 max-sm:px-4">
			<div className="flex w-full gap-6 max-md:gap-4 max-sm:gap-2">
				<div className="flex items-center gap-4">
					<Image className="h-9 w-9" src={logo} alt="app-logo" />
					<label className="truncate text-sm text-[#455a64]">CoreNotes</label>
				</div>
				<InputSearch onChange={onSearch} />
			</div>
			<XIcon />
		</header>
	);
};

export default Header;
export { Header };

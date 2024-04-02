import type { ReactNode } from "react";

import "@app/web/shared/theme/globals.css";

type RootLayoutProps = {
	children: ReactNode;
};

const RootLayout = (props: RootLayoutProps) => {
	const { children } = props;

	return (
		<html lang="en">
			<body className="bg-default flex size-full">{children}</body>
		</html>
	);
};

export default RootLayout;

import type { Metadata } from "next";
import type { ReactNode } from "react";
import { Inter } from "next/font/google";

import "@app/web/shared/theme/globals.css";

const inter = Inter({ subsets: ["latin"] });

const metadata: Metadata = {
	title: "CoreNotes",
	description: "",
};

type RootLayoutProps = {
	children: ReactNode;
};

const RootLayout = (props: RootLayoutProps) => {
	const { children } = props;

	return (
		<html lang="en">
			<body className={`bg-default flex size-full ${inter.className}`}>{children}</body>
		</html>
	);
};

export default RootLayout;
// eslint-disable-next-line
export { metadata };

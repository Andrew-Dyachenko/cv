import type { Metadata } from "next";
import {
	// Inter,
	// Ubuntu,
	// Open_Sans,
	// Lora,
	// Lato,
	// IBM_Plex_Sans,
	// Quicksand,
	// Nunito,
	// Rubik,
	// Comfortaa,
	// Montserrat_Alternates,
	// Jura,
	Sofia_Sans,
	// Ysabeau,
} from "next/font/google";
import "../styles/global.scss";
import clsx from "clsx";

import DirectionToggle from "@/components/DirectionToggle";
const font = Sofia_Sans({
	weight: [
		// "100",
		// "200",
		// "300",
		"400",
		"500",
		"600",
		"700",
		// "800",
		// "900",
		// "1000",
	],
	subsets: ["latin", /*"cyrillic"*/],
});

export const metadata: Metadata = {
	title: `CV - ${author}`,
	description: `resume (CV) of the Frontend developer - ${author}`,
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en" dir="ltr">
			<body className={clsx(font.className)}>
				<div className="app">
					{process.env.NODE_ENV === "development" ? <DirectionToggle /> : null}
					{children}
				</div>
			</body>
		</html>
	);
}

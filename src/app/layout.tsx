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
import "./styles/global.scss";
import packageJSON from "../../package.json";
import DirectionToggle from "@/app/components/DirectionToggle";

const { author } = packageJSON;
const font = Sofia_Sans({
	weight: [
		// "100",
		// "200",
		"300",
		"400",
		"500",
		"600",
		"700",
		"800",
		// "900",
		// "1000",
	],
	subsets: ["latin", /*"cyrillic"*/],
});

export const metadata: Metadata = {
	title: `CV - ${author}`,
	description: `resume (CV) of the Frontend developer - ${author}`,
	authors: {
		name: `${author}`,
		url: "https://github.com/Andrew-Dyachenko/cv",
	},
};
// console.log('process.env.NODE_ENV: ', process.env.NODE_ENV);

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en" dir="ltr">
			<body className={font.className}>
				<div className="app">
					{process.env.NODE_ENV === "development" ? <DirectionToggle /> : null}
					{children}
				</div>
			</body>
		</html>
	);
}

import { Suspense } from "react";
import Metrika from "../components/Metrika";
import type { Metadata } from "next";
import type { Viewport } from "next";
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
import packageJSON from "../../../package.json";
import Header from "../components/Header";

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
	subsets: ["latin" /*"cyrillic"*/],
});

export const metadata: Metadata = {
	title: `CV - ${author}`,
	description: `resume (CV) of the Frontend developer - ${author}`,
	authors: {
		name: `${author}`,
		url: "https://github.com/Andrew-Dyachenko/cv",
	},
};

export const viewport: Viewport = {
	colorScheme: "light dark",
};

// console.log('process.env.NODE_ENV: ', process.env.NODE_ENV);

// <!-- /Yandex.Metrika counter -->
export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en" dir="ltr">
			<body className={font.className}>
				<noscript>
					<div>
						{/* eslint-disable-next-line @next/next/no-img-element */}
						<img
							src="https://mc.yandex.ru/watch/96691605"
							style={{ position: "absolute", left: "-9999px" }}
							alt="Yandex Metrika noscript watcher"
						/>
					</div>
				</noscript>
				<div className="app">
					<Header />
					<div className="app__body">{children}</div>
				</div>
				<Suspense>
					<Metrika />
				</Suspense>
			</body>
		</html>
	);
}

import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.scss";
import clsx from "clsx";

import DirectionToggle from "@/components/DirectionToggle";

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

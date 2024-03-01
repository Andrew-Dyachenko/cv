import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.scss";
import clsx from "clsx";

const inter = Inter({ subsets: ["latin"] });

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
		<html lang="en">
			<body className={clsx(inter.className)}>
				<div className="app">{children}</div>
			</body>
		</html>
	);
}

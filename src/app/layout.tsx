import type { Metadata } from "next";
import { Nunito_Sans } from "next/font/google";
import "./globals.scss";

const nunitoSans = Nunito_Sans({ subsets: ["latin"] });

export const metadata: Metadata = {
	title: "CV - Andrey Dyacheko",
	description: "resume (CV) of the Frontend developer - Andrey Dyachenko",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body className={nunitoSans.className}>{children}</body>
		</html>
	);
}

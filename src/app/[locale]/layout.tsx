import { Suspense } from "react";
import Metrika from "../components/Metrika";
import type { Metadata, Viewport } from "next";
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

import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";
import { notFound } from "next/navigation";
import { routing } from "@/i18n/routing";

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
	subsets: ["latin", "cyrillic"],
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

export function generateStaticParams() {
	return routing.locales.map((locale) => ({ locale }));
}

export default async function RootLayout({
	children,
	params,
}: Readonly<{
	children: React.ReactNode;
	params: Promise<{ locale: string }>;
}>) {
	// Ensure that the incoming `locale` is valid
	const { locale } = await params;
	if (!routing.locales.includes(locale as any)) {
		notFound();
	}

	// Providing all messages to the client
	// side is the easiest way to get started
	const messages = await getMessages();

	return (
		<html lang={locale} dir={locale === "ar" ? "rtl" : "ltr"}>
			<body className={font.className}>
				<Suspense>
					<Metrika />
				</Suspense>
				<NextIntlClientProvider messages={messages}>
					<div className="app">
						<Header />
						<div className="app__body">{children}</div>
					</div>
				</NextIntlClientProvider>
			</body>
		</html>
	);
}

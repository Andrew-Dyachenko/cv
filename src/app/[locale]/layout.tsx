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
import Script from "next/script";

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
				<Script id="metrika-counter" strategy="afterInteractive">
					{`
						(function (m, e, t, r, i, k, a) {
							m[i] =
								m[i] ||
								function () {
									(m[i].a = m[i].a || []).push(arguments);
								};
							m[i].l = 1 * new Date();
							for (var j = 0; j < document.scripts.length; j++) {
								if (document.scripts[j].src === r) {
									return;
								}
							}
							(k = e.createElement(t)),
								(a = e.getElementsByTagName(t)[0]),
								(k.async = 1),
								(k.src = r),
								a.parentNode.insertBefore(k, a);
						})(window, document, "script", "https://mc.yandex.ru/metrika/tag.js", "ym");

						ym(96691605, "init", {
							defer: true,
							clickmap: true,
							trackLinks: true,
							accurateTrackBounce: true,
							webvisor: true,
						});
					`}
				</Script>
				<Suspense fallback={null}>
					<Metrika userId={96691605} />
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

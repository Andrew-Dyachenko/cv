// app/components/metrika.js
"use client";

import { useEffect, Fragment } from "react";
import { usePathname, useSearchParams } from "next/navigation";
import Script from "next/script";

let ym = (arg0: number, arg1: string, href: string): void => {};

export default function Metrika() {
	const pathName = usePathname();
	const searchParams = useSearchParams();

	useEffect(() => {
		ym(96691605, "hit", window.location.href);
	}, [pathName, searchParams]);

	return (
		<Fragment>
			{/* Yandex.Metrika counter */}
			<Script id="yandex-metrika">
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
					clickmap: true,
					trackLinks: true,
					accurateTrackBounce: true,
					webvisor: true,
					defer: true,
				});
			`}
			</Script>
			<noscript>
				<div>
					{/* eslint-disable-next-line @next/next/no-img-element */}
					<img
						src="https://mc.yandex.ru/watch/96691605"
						style={{
							position: "absolute",
							left: "-9999px",
						}}
						alt="Yandex Metrika noscript watcher"
					/>
				</div>
			</noscript>
			{/* /Yandex.Metrika counter */}
		</Fragment>
	);
}

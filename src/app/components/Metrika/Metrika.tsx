"use client";

import { useEffect } from "react";
import { usePathname, useSearchParams } from "next/navigation";

// Declare 'ym' as a global variable if it is provided by an external script
declare const ym: (userId: number, action: string, url: string) => void;

interface YandexMetrikaProps {
	userId: number;
}

export default function YandexMetrika({ userId }: YandexMetrikaProps) {
	const pathname = usePathname();
	const searchParams = useSearchParams();

	useEffect(() => {
		const url = `${pathname}?${searchParams}`;
		try {
			ym(userId, "hit", url);
		} catch (err) {
			throw new Error(
				`Yandex Metrika is not defined: ${(err as Error)?.message || "Unknown error"}`,
			);
		}
	}, [pathname, searchParams, userId]);

	return null;
}

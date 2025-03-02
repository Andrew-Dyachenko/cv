"use client";

import { useRouter } from "next/navigation";
import { useLocale } from "next-intl";

export default function LanguageSwitcher() {
	const router = useRouter();
	const locale = useLocale(); // Текущий язык

	const changeLanguage = (e: React.ChangeEvent<HTMLSelectElement>) => {
		const newLocale = e.target.value;

		// Сохраняем язык в куки
		document.cookie = `NEXT_LOCALE=${newLocale}; path=/; max-age=31536000; SameSite=Lax`;

		// Перенаправляем на новый язык с помощью router.push
		router.push(`/${newLocale}`);
	};

	return (
		<select value={locale} onChange={changeLanguage}>
			<option value="en" lang="en">
				🇬🇧 English
			</option>
			<option value="ru" lang="ru">
				🇷🇺 Русский
			</option>
			<option value="ar" lang="ar">
				🇦🇪 عربي
			</option>
		</select>
	);
}

"use client"; // Указывает, что компонент должен рендериться только на клиенте

import styles from "./header.module.scss";
import { useEffect, useState } from "react";
import clsx from "clsx";

const onSubmit = (e: { preventDefault: () => void }) => {
	e.preventDefault(); // Предотвращаем стандартное поведение формы
};

export default function FontSize() {
	// Состояние для хранения текущего коэффициента размера шрифта
	const [size, setSize] = useState(1);

	// Флаг, указывающий, что компонент смонтирован (чтобы избежать записи в localStorage при SSR)
	const [isMounted, setIsMounted] = useState(false);

	// Эффект, который выполняется при первом рендере и загружает значение из localStorage
	useEffect(() => {
		setIsMounted(true); // Отмечаем, что компонент смонтирован

		// Проверяем, доступен ли window (избегаем ошибок в SSR)
		const savedSize =
			typeof window !== "undefined" ? localStorage.getItem("fontSize") : null;

		// Если в localStorage есть сохранённое значение, устанавливаем его
		if (savedSize) {
			setSize(Number(savedSize));
		}
	}, []);

	// Эффект, который обновляет размер шрифта и сохраняет его в localStorage при изменении size
	useEffect(() => {
		if (!isMounted) return; // Если компонент ещё не смонтирован, ничего не делаем

		const html = document.documentElement;
		html.style.fontSize = ""; // Сбрасываем текущий размер

		// Получаем базовый размер шрифта из CSS (обычно 16px) и очищаем от букв
		const defaultFontSize = Number(
			(getComputedStyle(html).fontSize || "16px").replace(/[\D]*/g, ""),
		);

		// Устанавливаем новый размер шрифта, умножая его на выбранный коэффициент
		html.style.fontSize = `${defaultFontSize * size}px`;

		// Сохраняем новый коэффициент в localStorage, чтобы он сохранился после перезагрузки страницы
		localStorage.setItem("fontSize", size.toString());
	}, [size, isMounted]); // Этот эффект срабатывает при изменении size и isMounted

	return (
		<form
			className={clsx(styles.font, styles.header__font)}
			onSubmit={onSubmit}
		>
			{/* Кнопка выбора коэффициента 1 */}
			<input
				type="radio"
				name="globalFontSize"
				id="globalFontSize--1"
				value={1}
				checked={size === 1} // Радио-кнопка будет выбрана, если size === 1
				onChange={() => setSize(1)} // При выборе этой кнопки устанавливаем size = 1
				className={styles.font__input}
			/>
			<label
				htmlFor="globalFontSize--1"
				className={clsx(styles.font__label, styles["font__label--1"])}
			>
				A
			</label>

			{/* Кнопка выбора коэффициента 1.125 */}
			<input
				type="radio"
				name="globalFontSize"
				id="globalFontSize--1_125"
				value={1.125}
				checked={size === 1.125}
				onChange={() => setSize(1.125)}
				className={styles.font__input}
			/>
			<label
				htmlFor="globalFontSize--1_125"
				className={clsx(styles.font__label, styles["font__label--1_125"])}
			>
				A
			</label>

			{/* Кнопка выбора коэффициента 1.25 */}
			<input
				type="radio"
				name="globalFontSize"
				id="globalFontSize--1_25"
				value={1.25}
				checked={size === 1.25}
				onChange={() => setSize(1.25)}
				className={styles.font__input}
			/>
			<label
				htmlFor="globalFontSize--1_25"
				className={clsx(styles.font__label, styles["font__label--1_25"])}
			>
				A
			</label>
		</form>
	);
}

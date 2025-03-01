"use client";
import { useState, useEffect } from "react";
import styles from "./color-scheme-switcher.module.scss";
import clsx from "clsx";

// Тип для возможных значений цветовой схемы
type ColorScheme = "light" | "dark" | "system";

const ColorSchemeSwitcher = () => {
	// Состояние для хранения текущей цветовой схемы
	const [colorScheme, setColorScheme] = useState<ColorScheme>("system");

	// Функция для применения цветовой схемы
	const applyColorScheme = (scheme: ColorScheme) => {
		// Проверяем, что код выполняется в браузере
		if (typeof window !== "undefined") {
			// Корневой элемент <html>
			const root = window.document.documentElement;
			const isDarkMode = window.matchMedia(
				"(prefers-color-scheme: dark)"
			).matches; // Проверяем системную тему

			// Удаляем оба класса перед применением новой схемы
			root.classList.remove("light", "dark");

			// Применяем классы в зависимости от выбранной схемы
			if (scheme === "light") {
				// Явно добавляем класс для светлой темы
				root.classList.add("light");
			} else if (scheme === "dark") {
				// Явно добавляем класс для темной темы
				root.classList.add("dark");
			} else if (scheme === "system") {
				// Для системной темы добавляем класс в зависимости от системных настроек
				if (isDarkMode) {
					// Добавляем класс для тёмной системной темы
					root.classList.add("dark");
				} else {
					// Добавляем класс для светлой системной темы
					root.classList.add("light");
				}
			}
		}
	};

	// При монтировании компонента загружаем цветовую схему из localStorage
	useEffect(() => {
		// Проверяем, что код выполняется в браузере
		if (typeof window !== "undefined") {
			// Получаем сохраненную схему из localStorage
			const savedScheme = localStorage.getItem(
				"colorScheme"
			) as ColorScheme | null;
			// Используем сохраненную схему или системную схему по умолчанию
			const initialScheme = savedScheme || "system";
			// Устанавливаем состояние
			setColorScheme(initialScheme);
			// Применяем схему
			applyColorScheme(initialScheme);
		}
	}, []);

	// Отслеживаем изменения системной темы
	useEffect(() => {
		// Проверяем, что код выполняется в браузере
		if (typeof window !== "undefined") {
			// Создаем медиа-запрос для темной темы
			const darkModeMediaQuery = window.matchMedia(
				"(prefers-color-scheme: dark)"
			);

			// Обработчик изменений системной темы
			const handleSystemThemeChange = (event: MediaQueryListEvent) => {
				// Если выбрана системная тема, применяем изменения
				if (colorScheme === "system") {
					applyColorScheme("system");
				}
			};

			// Подписываемся на изменения системной темы
			darkModeMediaQuery.addEventListener(
				"change",
				handleSystemThemeChange
			);

			// Отписываемся от изменений при размонтировании компонента
			return () => {
				darkModeMediaQuery.removeEventListener(
					"change",
					handleSystemThemeChange
				);
			};
		}
	}, [colorScheme]); // Зависимость от colorScheme

	// Обработчик изменения цветовой схемы
	const handleColorSchemeChange = (
		event: React.ChangeEvent<HTMLInputElement>
	) => {
		// Получаем выбранную схему из радио-кнопки
		const selectedScheme = event.target.value as ColorScheme;
		// Обновляем состояние
		setColorScheme(selectedScheme);

		// Проверяем, что код выполняется в браузере
		if (typeof window !== "undefined") {
			// Сохраняем выбор в localStorage
			localStorage.setItem("colorScheme", selectedScheme);
		}

		// Применяем схему
		applyColorScheme(selectedScheme);
	};

	return (
		<fieldset className={styles["scheme-switcher"]}>
			<legend className={clsx("visually-hidden", styles["scheme-switcher__legend"])}>
				Схема переключения цветовой темы
			</legend>
			{/* Радио-кнопка для выбора светлой темы */}
			<input
				id="light-scheme"
				className={clsx(styles["scheme-switcher__input"], styles["scheme-switcher__input--light"])}
				type="radio"
				value="light"
				checked={colorScheme === "light"}
				onChange={handleColorSchemeChange}
				name="color-scheme"
				aria-label="Light color scheme"
			/>
			<label
				htmlFor="light-scheme"
				className={clsx(styles["scheme-switcher__label"], styles["scheme-switcher__label--light"])}
			>
				Light
			</label>

			{/* Радио-кнопка для выбора системной темы */}
			<input
				id="system-scheme"
				className={clsx(styles["scheme-switcher__input"], styles["scheme-switcher__input--system"])}
				type="radio"
				value="system"
				checked={colorScheme === "system"}
				onChange={handleColorSchemeChange}
				name="color-scheme"
				aria-label="System (auto) color scheme"
			/>
			<label
				htmlFor="system-scheme"
				className={clsx(styles["scheme-switcher__label"], styles["scheme-switcher__label--system"])}
			>
				System
			</label>

			{/* Радио-кнопка для выбора темной темы */}
			<input
				id="dark-scheme"
				className={clsx(styles["scheme-switcher__input"], styles["scheme-switcher__input--dark"])}
				type="radio"
				value="dark"
				checked={colorScheme === "dark"}
				onChange={handleColorSchemeChange}
				name="color-scheme"
				aria-label="Dark color scheme"
			/>
			<label
				htmlFor="dark-scheme"
				className={clsx(styles["scheme-switcher__label"], styles["scheme-switcher__label--dark"])}
			>
				Dark
			</label>
			<div className={styles["scheme-switcher__status"]}></div>
		</fieldset>
	);
};

export default ColorSchemeSwitcher;

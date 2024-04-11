"use client";

import styles from "./header.module.scss";
import { useEffect, useState } from "react";
import clsx from "clsx";

const onSubmit = (e: { preventDefault: () => void }) => {
	e.preventDefault();
};

export default function FontSize() {
	const [size, setSize] = useState(1);

	useEffect(() => {
		const html = document.documentElement;
		html.style.fontSize = ""; // Reset
		const defaultFontSize = Number(
			(getComputedStyle(html).fontSize || "16px").replace(/[\D]*/g, ""),
		);
		html.style.fontSize = `${defaultFontSize * size}px`;
	}, [size]);

	return (
		<form className={clsx(styles.font, styles.header__font)} onSubmit={onSubmit}>
			<input
				type="radio"
				name="globalFontSize"
				id="globalFontSize--1"
				value={1}
				defaultChecked
				onChange={() => {
					setSize(1);
				}}
				className={styles.font__input}
			/>
			<label
				htmlFor="globalFontSize--1"
				className={clsx(styles.font__label, styles["font__label--1"])}
			>
				A
			</label>
			<input
				type="radio"
				name="globalFontSize"
				id="globalFontSize--1_125"
				value={1.125}
				onChange={() => {
					setSize(1.125);
				}}
				className={styles.font__input}
			/>
			<label
				htmlFor="globalFontSize--1_125"
				className={clsx(styles.font__label, styles["font__label--1_125"])}
			>
				A
			</label>
			<input
				type="radio"
				name="globalFontSize"
				id="globalFontSize--1_25"
				value={1.25}
				onChange={() => {
					setSize(1.25);
				}}
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

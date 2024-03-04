"use client";

import React, { useState } from "react";
import styles from "./DirectionToggle.module.scss";

const DirectionToggle = () => {
	const [direction, setDirection] = useState("ltr");

	const toggleDirection = () => {
		const newDirection = direction === "ltr" ? "rtl" : "ltr";
		setDirection(newDirection);
		document.documentElement.setAttribute("dir", newDirection); // Установите значение атрибута dir на корневом элементе документа
	};

	return (
		<button
			type="button"
			onClick={toggleDirection}
			className={styles.directionToggle}
		>
			Toggle Direction
		</button>
	);
};

export default DirectionToggle;

"use client";

import React, { useState } from "react";
import styles from "./directionToggle.module.scss";
import clsx from "clsx";
import { TbArrowsLeftRight } from "react-icons/tb";

const DirectionToggle = ({
	classNameModificator,
	children,
}: {
	classNameModificator: string;
	children: React.ReactNode
}) => {
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
			className={clsx(styles.directionToggle, classNameModificator)}
		>
			<TbArrowsLeftRight />
			{children}
		</button>
	);
};

export default DirectionToggle;

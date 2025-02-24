"use client";
import React from "react";
import styles from "./print-button.module.scss";
import { TfiPrinter } from "react-icons/tfi";

const PrintButton = () => {
	const handlePrint = () => {
		if (typeof window !== "undefined") {
			window.print();
		}
	};

	return (
		<button type="button" onClick={handlePrint} className={styles.button}>
			<TfiPrinter />
			<span className="visually-hidden">Print</span>
		</button>
	);
};

export default PrintButton;

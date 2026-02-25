"use client";

import type React from "react";
import styles from "./print-button.module.scss";
import { TfiPrinter } from "react-icons/tfi";

const PrintButton = ({ children }: { children: React.ReactNode }) => {
	const handlePrint = () => {
		if (typeof window !== "undefined") {
			window.print();
		}
	};

	return (
		<button type="button" onClick={handlePrint} className={styles.button}>
			<TfiPrinter />
			{children}
		</button>
	);
};

export default PrintButton;

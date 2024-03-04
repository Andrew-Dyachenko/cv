"use client";

import React, { useState } from "react";
import clsx from "clsx";

type ClassNames = {
	[key: string]: string;
};

export default function Tags<T extends ClassNames>({
	list = [],
	className,
	count = 6,
}: {
	list: Array<string>;
	className: T;
	count?: number;
}) {
	const [showAll, setShowAll] = useState(false);

	return (
		<div className={className.stack__list}>
			{list.slice(0, showAll ? list.length : count).map((tag) => (
				<div
					key={tag}
					className={clsx(
						className.stack__item,
						className[
							`stack__item--${tag
								.toLowerCase()
								.replace(/\s/gim, "")
								.replace(/[\(\)\.]/gim, "_")}`
						],
					)}
				>
					{tag}
				</div>
			))}
			<button
				className={className.stack__toggle}
				type="button"
				onClick={() => setShowAll((prev) => !prev)}
			>
				{showAll ? "Hide" : "Show all"}
			</button>
		</div>
	);
}

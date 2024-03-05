"use client";

import React, { useState } from "react";
import clsx from "clsx";

type TagsProps = {
	[key: string]: string;
};

export default function Tags<T extends TagsProps>({
	list = [],
	stylesheet,
	className = "tags",
	count = 6,
}: {
	list: Array<string>;
	stylesheet: T;
	className: string;
	count?: number;
}) {
	const [showAll, setShowAll] = useState(false);

	return (
		<div className={stylesheet[`${className}__list`]}>
			{list.slice(0, showAll ? list.length : count).map((tag) => (
				<div
					key={tag}
					className={clsx(
						stylesheet[`${className}__item`],
						stylesheet[
							`${className}__item--${tag
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
				className={stylesheet.stack__toggle}
				type="button"
				onClick={() => setShowAll((prev) => !prev)}
			>
				{showAll ? "Hide" : "Show all"}
			</button>
		</div>
	);
}

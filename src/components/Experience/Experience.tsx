"use client";

// import { useId } from "react";
import { Accordion } from "react-bootstrap";
// import { useAccordionButton } from "react-bootstrap/AccordionButton";
import accordionStyles from "@/components/Accordion/Accordion.module.scss";
import styles from "./Experience.module.scss";
// import { FaExternalLinkAlt } from "react-icons/fa";
import getFormattedDateTime from "@/utils/getFormattedDateTime";
import { Sofia_Sans } from "next/font/google";
import clsx from "clsx";
// import Link from "next/link";
// import { DateTime } from "luxon";

// function CustomToggle({ children, eventKey }) {
// 	const decoratedOnClick = useAccordionButton(eventKey, () =>
// 		console.log("totally custom!"),
// 	);

// 	return (
// 		<button
// 			type="button"
// 			style={{ backgroundColor: "pink" }}
// 			onClick={decoratedOnClick}
// 		>
// 			{children}
// 		</button>
// 	);
// }

const font = Sofia_Sans({
	weight: [
		// "100",
		// "200",
		// "300",
		"400",
		"500",
		"600",
		// "700",
		// "800",
		// "900",
		// "1000",
	],
	subsets: ["latin", /*"cyrillic"*/],
});

export default function Experience() {
	return (
		<Accordion
			defaultActiveKey={["0"]}
			alwaysOpen
			className={accordionStyles.accordion}
		>
			<Accordion.Item
				eventKey="0"
				bsPrefix="_"
				className={accordionStyles.accordion__item}
			>
				<h3 className={accordionStyles.accordion__header}>
					<Accordion.Button
						bsPrefix="_"
						className={clsx(accordionStyles.accordion__button, styles.experience__button, font.className)}
					>
						<pre className={styles.experience__when}>
							(
							<time
								dateTime={getFormattedDateTime({
									year: 2023,
									month: 1,
									day: 25,
									hour: 0,
									timezoneOffset: 60 * 4,
								})}
							>
								January 2023
							</time>{" "}
							-{" "}
							<time dateTime={getFormattedDateTime({ timezoneOffset: 60 * 4 })}>
								Present
							</time>
							)
						</pre>
						<pre className={styles.experience__duration}>1 year 2 months</pre>
						<span className={styles.experience__position}>Frontend developer</span>
						<span className={styles.experience__where}>Individual Entrepreneur - Batumi, Georgia 🇬🇪</span>

					</Accordion.Button>
				</h3>
				<Accordion.Collapse
					eventKey="0"
					bsPrefix="_"
					className={accordionStyles.accordion__collapse}
				>
					<div className={accordionStyles.accordion__body}>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
						eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
						ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
						aliquip ex ea commodo consequat. Duis aute irure dolor in
						reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
						pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
						culpa qui officia deserunt mollit anim id est laborum.
					</div>
				</Accordion.Collapse>
			</Accordion.Item>
			<Accordion.Item
				eventKey="1"
				bsPrefix="_"
				className={accordionStyles.accordion__item}
			>
				<h3 className={accordionStyles.accordion__header}>
					<Accordion.Button
						bsPrefix="_"
						className={clsx(accordionStyles.accordion__button, styles.experience__button, font.className)}
					>
						<pre className={styles.experience__when}>(October 2019 - August 2022)</pre>
						<pre className={styles.experience__duration}>2 years 11 months</pre>
						<span className={styles.experience__position}>Frontend developer</span>
						<span className={styles.experience__where}>LLC ITSOLUTIONS (ZFX) - Moscow, Russia 🇷🇺</span>

					</Accordion.Button>
				</h3>
				<Accordion.Collapse
					eventKey="1"
					bsPrefix="_"
					className={accordionStyles.accordion__collapse}
				>
					<div className={accordionStyles.accordion__body}>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
						eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
						ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
						aliquip ex ea commodo consequat. Duis aute irure dolor in
						reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
						pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
						culpa qui officia deserunt mollit anim id est laborum.
					</div>
				</Accordion.Collapse>
			</Accordion.Item>
			<Accordion.Item
				eventKey="2"
				bsPrefix="_"
				className={accordionStyles.accordion__item}
			>
				<h3 className={accordionStyles.accordion__header}>
					<Accordion.Button
						bsPrefix="_"
						className={clsx(accordionStyles.accordion__button, font.className)}
					>
						Accordion Item #3
					</Accordion.Button>
				</h3>
				<Accordion.Collapse
					eventKey="2"
					bsPrefix="_"
					className={accordionStyles.accordion__collapse}
				>
					<div className={accordionStyles.accordion__body}>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
						eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
						ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
						aliquip ex ea commodo consequat. Duis aute irure dolor in
						reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
						pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
						culpa qui officia deserunt mollit anim id est laborum.
					</div>
				</Accordion.Collapse>
			</Accordion.Item>
		</Accordion>
	);
}

{
	/* <details className={accordionStyles.experience__details}>
	<summary className={accordionStyles.experience__summary}>
		<h2 className={accordionStyles.experience__position}>Frontend developer</h2>
		<h3 className={accordionStyles.experience__where}>
			Individual Entrepreneur - Atumi, Georgia 🇬🇪
		</h3>
		<span className={accordionStyles.experience__range}>
			(
			<time
				dateTime={getFormattedDateTime({
					year: 2023,
					month: 1,
					day: 25,
					hour: 0,
					timezoneOffset: 60 * 4,
				})}
			>
				January 2023
			</time>{" "}
			-{" "}
			<time dateTime={getFormattedDateTime({ timezoneOffset: 60 * 4 })}>
				Now
			</time>
			)
		</span>
		<small className={accordionStyles.experience__diff}>1 year 2 months</small>
	</summary>
	<div className={accordionStyles.experience__info}>
		The provision of online services for the development of front-end
		web applications by the developer:{" "}
		<abbr title="MPA (Multi-Page Application): is a type of web application in which each page is loaded separately">
			MPA
		</abbr>
		,{" "}
		<abbr title="SPA (Single-Page Application): is a type of web application or website that interacts with the user by dynamically rewriting the current page, rather than loading entire new pages from the server. In SPA, the initial HTML, CSS, and JavaScript are loaded once, and subsequent interactions are handled through AJAX requests to update the content on the page, providing a smoother and more seamless user experience.">
			SPA
		</abbr>{" "}
		,{" "}
		<abbr title="Landing (Landing page): is a separate web page aimed at a specific goal of the marketing campaign. The purpose of the landing page can be the collection of contact details, the sale of a product or service, attracting subscribers, etc. Landing pages are usually designed so that it is most effectively attracted and motivated by the visitor to perform the desired action.">
			Landings
		</abbr>{" "}
		and{" "}
		<abbr title="Email (Electronic Mail): is an electronic communication form that allows you to send and receive messages via the Internet. Email users can send text messages, html code, attach files, exchange documents and interact with other people using email addresses.">
			Emails
		</abbr>{" "}
		as an individual entrepreneur
	</div>
</details>
<details className={accordionStyles.experience__details}>
	<summary className={accordionStyles.experience__summary}>
		<h2 className={accordionStyles.experience__position}>Frontend developer</h2>
		<h3 className={accordionStyles.experience__where}>
			LLC ITSOLUTIONS (ZFX) - Moscow, Russia 🇷🇺
		</h3>
		<span className={accordionStyles.experience__range}>
			(October 2019 - August 2022)
		</span>
		<small className={accordionStyles.experience__diff}>2 years 11 months</small>
	</summary>
	<div className={accordionStyles.experience__info}>
		Maintained projects:
		<ol>
			<li>
				<Link href="https://www.zfx.com/" target="_blank">
					zfx.com <FaExternalLinkAlt />
				</Link>{" "}
				- ZFX executive website / aggregator.
			</li>
			<li>
				<Link href="https://my.zfx.com/" target="_blank">
					my.zfx.com <FaExternalLinkAlt />
				</Link>{" "}
				- CRM portal to work with leads.
			</li>
			<li>
				<Link href="https://its-nu.vercel.app/" target="_blank">
					its-nu.vercel.app <FaExternalLinkAlt />
				</Link>{" "}
				- LLC ITSOLUTIONS executive website.
			</li>
		</ol>
	</div>
</details> */
}

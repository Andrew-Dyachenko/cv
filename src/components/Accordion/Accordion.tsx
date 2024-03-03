"use client";

// import { useId } from "react";
import { Accordion as A } from "react-bootstrap";
// import { useAccordionButton } from "react-bootstrap/AccordionButton";
import styles from "./accordion.module.scss";
// import { FaExternalLinkAlt } from "react-icons/fa";
import getFormattedDateTime from "@/utils/getFormattedDateTime";
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

export default function Accordion() {
	return (
		<A defaultActiveKey={["0"]} alwaysOpen className={styles.accordion}>
			<A.Item eventKey="0" bsPrefix=" " className={styles.accordion__item}>
				<h3 className={styles.accordion__header}>
					<A.Button bsPrefix=" " className={styles.accordion__button}>
						<span>Frontend developer</span>
						<span>Individual Entrepreneur - Batumi, Georgia 🇬🇪</span>
						<small>
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
						</small>
					</A.Button>
				</h3>
				<A.Collapse
					eventKey="0"
					bsPrefix=" "
					className={styles.accordion__collapse}
				>
					<div className={styles.accordion__body}>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
						eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
						ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
						aliquip ex ea commodo consequat. Duis aute irure dolor in
						reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
						pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
						culpa qui officia deserunt mollit anim id est laborum.
					</div>
				</A.Collapse>
			</A.Item>
			<A.Item eventKey="1" bsPrefix=" " className={styles.accordion__item}>
				<h3 className={styles.accordion__header}>
					<A.Button bsPrefix=" " className={styles.accordion__button}>
						<span>Frontend developer</span>
						<span>LLC ITSOLUTIONS (ZFX) - Moscow, Russia 🇷🇺</span>
						<small>(October 2019 - August 2022)</small>
					</A.Button>
				</h3>
				<A.Collapse
					eventKey="1"
					bsPrefix=" "
					className={styles.accordion__collapse}
				>
					<div className={styles.accordion__body}>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
						eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
						ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
						aliquip ex ea commodo consequat. Duis aute irure dolor in
						reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
						pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
						culpa qui officia deserunt mollit anim id est laborum.
					</div>
				</A.Collapse>
			</A.Item>
			<A.Item eventKey="2" bsPrefix=" " className={styles.accordion__item}>
				<h3 className={styles.accordion__header}>
					<A.Button bsPrefix=" " className={styles.accordion__button}>
						Accordion Item #3
					</A.Button>
				</h3>
				<A.Collapse
					eventKey="2"
					bsPrefix=" "
					className={styles.accordion__collapse}
				>
					<div className={styles.accordion__body}>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
						eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
						ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
						aliquip ex ea commodo consequat. Duis aute irure dolor in
						reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
						pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
						culpa qui officia deserunt mollit anim id est laborum.
					</div>
				</A.Collapse>
			</A.Item>
		</A>
	);
}

{
	/* <details className={styles.experience__details}>
	<summary className={styles.experience__summary}>
		<h2 className={styles.experience__position}>Frontend developer</h2>
		<h3 className={styles.experience__where}>
			Individual Entrepreneur - Atumi, Georgia 🇬🇪
		</h3>
		<span className={styles.experience__range}>
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
		<small className={styles.experience__diff}>1 year 2 months</small>
	</summary>
	<div className={styles.experience__info}>
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
<details className={styles.experience__details}>
	<summary className={styles.experience__summary}>
		<h2 className={styles.experience__position}>Frontend developer</h2>
		<h3 className={styles.experience__where}>
			LLC ITSOLUTIONS (ZFX) - Moscow, Russia 🇷🇺
		</h3>
		<span className={styles.experience__range}>
			(October 2019 - August 2022)
		</span>
		<small className={styles.experience__diff}>2 years 11 months</small>
	</summary>
	<div className={styles.experience__info}>
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

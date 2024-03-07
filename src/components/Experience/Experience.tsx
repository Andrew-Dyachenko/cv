"use client";

// import { useId } from "react";
import { Accordion } from "react-bootstrap";
// import { useAccordionButton } from "react-bootstrap/AccordionButton";
import accordionStyles from "@/components/Accordion/accordion.module.scss";
import styles from "@/components/Experience/experience.module.scss";
// import { FaExternalLinkAlt } from "react-icons/fa";
import getFormattedDateTime from "@/utils/getFormattedDateTime";
import { FaExternalLinkAlt } from "react-icons/fa";
import { Sofia_Sans } from "next/font/google";
import clsx from "clsx";

// import Link from "next/link";
// import { DateTime } from "luxon";

const font = Sofia_Sans({
	weight: [
		// "100",
		// "200",
		"300",
		"400",
		"500",
		// "600",
		// "700",
		// "800",
		// "900",
		// "1000",
	],
	subsets: ["latin" /*"cyrillic"*/],
});

export default function Experience() {
	return (
		<Accordion
			defaultActiveKey={["1"]}
			alwaysOpen
			className={accordionStyles.accordion}
		>
			{/* INDIVIDUAL ENTREPRENEUR */}
			<Accordion.Item
				eventKey="0"
				bsPrefix="_"
				className={accordionStyles.accordion__item}
			>
				<h3 className={accordionStyles.accordion__header}>
					<Accordion.Button
						bsPrefix="_"
						className={clsx(
							accordionStyles.accordion__button,
							styles.experience__button,
							font.className,
						)}
					>
						<span className={styles.experience__when}>
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
						</span>
						<span className={styles.experience__duration}>
							<span className="visually-hidden">
								Duration of the work as an individual entrepreneur is
							</span>{" "}
							1 year 2 months
						</span>
						<span className={styles.experience__position}>
							Frontend developer
						</span>
						<span className={styles.experience__where}>
							Individual Entrepreneur - Batumi, Georgia 🇬🇪
						</span>
					</Accordion.Button>
				</h3>
				<div className={accordionStyles.accordion__wrapper}>
					<Accordion.Collapse
						eventKey="0"
						bsPrefix="_"
						className={accordionStyles.accordion__collapse}
					>
						<div className={accordionStyles.accordion__body}>
							Providing services for the development of web applications, sites,
							packages and email as an individual entrepreneur
							(freelance/contracts).{" "}
							<abbr title="Non-Disclosure Agreement">NDA</abbr>.
							{/* <hr style={{ width: "61.803398875%", marginInline: 0, marginBlock: "1rem 0" }} /> */}
						</div>
					</Accordion.Collapse>
				</div>
			</Accordion.Item>
			{/* LLC ITSOLUTIONS */}
			<Accordion.Item
				eventKey="1"
				bsPrefix="_"
				className={accordionStyles.accordion__item}
			>
				<h3 className={accordionStyles.accordion__header}>
					<Accordion.Button
						bsPrefix="_"
						className={clsx(
							accordionStyles.accordion__button,
							styles.experience__button,
							font.className,
						)}
					>
						<span className={styles.experience__when}>
							(
							<time
								dateTime={getFormattedDateTime({
									year: 2019,
									month: 10,
									day: 1,
									timezoneOffset: 60 * 3,
								})}
							>
								October 2019
							</time>{" "}
							-{" "}
							<time
								dateTime={getFormattedDateTime({
									year: 2022,
									month: 8,
									day: 1,
									timezoneOffset: 60 * 3,
								})}
							>
								August 2022
							</time>
							)
						</span>
						<span className={styles.experience__duration}>
							<span className="visually-hidden">
								Duration of the work in at llc itsolutions company is
							</span>{" "}
							2 years 11 months
						</span>
						<span className={styles.experience__position}>
							Frontend developer
						</span>
						<span className={styles.experience__where}>
							LLC ITSOLUTIONS (ZFX) - Moscow, Russia 🇷🇺
						</span>
					</Accordion.Button>
				</h3>
				<div className={accordionStyles.accordion__wrapper}>
					<Accordion.Collapse
						eventKey="1"
						bsPrefix="_"
						className={accordionStyles.accordion__collapse}
					>
						<div className={accordionStyles.accordion__body}>
							<p>Worked on the following projects:</p>
							<ol style={{ listStylePosition: "inside", paddingInline: 0 }}>
								<li>
									<a
										href="https://www.zfx.com/"
										target="_blank"
										rel="noopener noreferrer"
										style={{ display: "inline-flex", alignItems: "center" }}
									>
										<span>zfx.com</span>{" "}
										<FaExternalLinkAlt
											style={{
												fontSize: "0.75em",
												marginInlineStart: "0.3333em",
											}}
										/>
									</a>{" "}
									- Broker aggregator website.
								</li>
								<li>
									<a
										href="https://my.zfx.com/login"
										target="_blank"
										rel="noopener noreferrer"
										style={{ display: "inline-flex", alignItems: "center" }}
									>
										<span>my.zfx.com</span>{" "}
										<FaExternalLinkAlt
											style={{
												fontSize: "0.75em",
												marginInlineStart: "0.3333em",
											}}
										/>
									</a>{" "}
									- CRM portal for servicing the broker leads.
								</li>
								<li>
									<a
										href="https://its-nu.vercel.app/"
										// biome-ignore lint/a11y/noBlankTarget: <The site is under our control>
										target="_blank"
										style={{ display: "inline-flex", alignItems: "center" }}
									>
										<span>its-nu.vercel.app</span>{" "}
										<FaExternalLinkAlt
											style={{
												fontSize: "0.75em",
												marginInlineStart: "0.3333em",
											}}
										/>
									</a>{" "}
									- Representative website of the contracting company{" "}
									<dfn>LLC ITSOLUTIONS</dfn>.
								</li>
							</ol>
							<h4>Responsebilities:</h4>
							<dl style={{ paddingInlineStart: 0, marginBlockEnd: 0 }}>
								{/* ZFX.COM */}
								<dt>
									<a
										href="https://www.zfx.com/"
										target="_blank"
										rel="noopener noreferrer"
										style={{
											display: "inline-flex",
											alignItems: "center",
											color: "inherit",
										}}
									>
										zfx.com{" "}
										<FaExternalLinkAlt
											style={{
												fontSize: "0.75em",
												marginInlineStart: "0.3333em",
											}}
										/>
									</a>
								</dt>
								{/* MY.ZFX.COM */}
								<dd
									style={{
										margin: 0,
										paddingInlineStart: "1rem",
										paddingBlock: "1rem",
									}}
								>
									<ul style={{ margin: 0 }}>
										<li>
											Start the project from a scratch for (
											<strong>WordPress</strong>).
										</li>
										<li>
											Create adaptive, pixel-perfect layout of the pages using (
											<strong>HTML</strong>, <strong>CSS</strong>,{" "}
											<strong>PUG</strong>, <strong>SASS</strong>).
										</li>
										<li>
											Deep integration and customization of (
											<strong>Bootstrap</strong>{" "}
											<code style={{ fontSize: "0.75em" }}>v4</code>).
										</li>
										<li>
											Writing business logic using (<strong>JavaScript</strong>{" "}
											<code style={{ fontSize: "0.75em" }}>^ES6</code>,{" "}
											<strong>jQuery</strong>).
										</li>
										<li>
											Create (<strong>React</strong>{" "}
											<code style={{ fontSize: "0.75em" }}>v16-17</code>) page
											applications.
										</li>
										<li>
											Support and implementation of (<strong>Vue</strong>{" "}
											<code style={{ fontSize: "0.75em" }}>v2</code>)
											applications on pages.
										</li>
										<li>
											Setting up data reception using (<strong>REST API</strong>
											, WebSocket).
										</li>
										<li>
											Cross-browser support down to{" "}
											<strong>Internet Explorer</strong>{" "}
											<code style={{ fontSize: "0.75em" }}>v10</code>
										</li>
										<li>Multilingual feature support.</li>
										<li>
											Support for bidirectional content (<strong>RTL</strong>,{" "}
											<strong>LTR</strong>).
										</li>
										<li>
											Configuring the assembly using (<strong>Parcel</strong>{" "}
											<code style={{ fontSize: "0.75em" }}>v1-2</code>,{" "}
											<strong>Node.js</strong>).
										</li>
										<li>
											Writing documentation (<strong>Markdown</strong>,{" "}
											<strong>JSDoc</strong>).
										</li>
										<li>
											Searching for solutions to establish the interaction of
											imperative and declarative technologies on one page, such
											as (<strong>WYSIWYG</strong>, <strong>React</strong>,{" "}
											<strong>jQuery</strong>, <strong>Vue</strong>).
										</li>
										<li>
											Optimizing site application using (
											<strong>
												Google Lighthouse{" "}
												<small>
													<i>(Core Web Vitals)</i>
												</small>
											</strong>
											, <strong>W3C HTML Validator</strong>) and other linters.
										</li>
										<li>
											Communication with team members and business customers
											through instant messengers and online audio-video meetings
											in two languages (<strong>English</strong>,{" "}
											<strong>Russian</strong>).
										</li>
										{/* <li>
										Continuous self-training using (<strong>Paper books</strong>
										)
									</li> */}
									</ul>
								</dd>
								<dt>
									<a
										href="https://my.zfx.com/login"
										target="_blank"
										rel="noopener noreferrer"
										style={{
											display: "inline-flex",
											alignItems: "center",
											color: "inherit",
										}}
									>
										my.zfx.com{" "}
										<FaExternalLinkAlt
											style={{
												fontSize: "0.75em",
												marginInlineStart: "0.3333em",
											}}
										/>
									</a>
								</dt>
								<dd
									style={{
										margin: 0,
										paddingInlineStart: "1rem",
										paddingBlock: "1rem",
									}}
								>
									<ul style={{ margin: 0 }}>
										<li>
											Support and improve the legacy app (<strong>Vue</strong>{" "}
											<code style={{ fontSize: "0.75em" }}>v2-3</code>).
										</li>
										<li>
											Adding languages to the multi-language switcher using (
											<strong>Vue</strong>) i18n library (<strong>Inter</strong>
											).
										</li>
										<li>
											Refactoring pages to support bi-directional content (
											<strong>LTR</strong>, <strong>RTL</strong>) to include
											Arabic language.
										</li>
										<li>
											Setting up data reception using (<strong>REST API</strong>
											, <strong>WebSocket</strong>).
										</li>
										<li>
											Communication with team members and business customers
											through instant messengers and online audio-video meetings
											in two languages (<strong>English</strong>,{" "}
											<strong>Russian</strong>).
										</li>
									</ul>
								</dd>
								{/* ITSOLUTIONS APP */}
								<dt>
									<a
										href="https://its-nu.vercel.app/"
										// biome-ignore lint/a11y/noBlankTarget: <The site is under our control>
										target="_blank"
										style={{
											display: "inline-flex",
											alignItems: "center",
											color: "inherit",
										}}
									>
										its-nu.vercel.app{" "}
										<FaExternalLinkAlt
											style={{
												fontSize: "0.75em",
												marginInlineStart: "0.3333em",
											}}
										/>
									</a>
								</dt>
								<dd
									style={{
										margin: 0,
										paddingInlineStart: "1rem",
										paddingBlock: "1rem 0",
									}}
								>
									<ul style={{ margin: 0 }}>
										<li>
											Start the project from a scratch using (
											<strong>Next.js</strong>{" "}
											<code style={{ fontSize: "0.75em" }}>v12</code>).
										</li>
										<li>
											Create adaptive, pixel-perfect layout of the app using (
											<strong>JSX</strong>, <strong>SASS</strong>).
										</li>
										<li>
											Cross-browser support down to <strong>2019</strong>.
										</li>
										<li>
											Multilingual feature support using (
											<strong>next-i18</strong>).
										</li>
										<li>
											Support for bidirectional content (<strong>RTL</strong>,{" "}
											<strong>LTR</strong>).
										</li>
										<li>
											Backend setup of a feedback form using (
											<strong>Next.js API</strong>)
										</li>
										<li>
											Create layout of an adaptive, themed (
											<span style={{ fontWeight: 800 }}>dark</span>{" "}
											<small
												style={{ fontSize: "0.75em", verticalAlign: "middle" }}
											>
												|
											</small>{" "}
											<span style={{ fontWeight: 300 }}>light</span>), fillable
											Email for the feedback form using the framework (
											<strong>ZURB</strong>)
										</li>
										<li>
											Optimizing site application using (
											<strong>
												Google Lighthouse{" "}
												<small>
													<i>(Core Web Vitals)</i>
												</small>
											</strong>
											, <strong>W3C HTML Validator</strong>) and other linters.
										</li>
									</ul>
								</dd>
							</dl>
							{/* <hr style={{ width: "61.803398875%", marginInline: 0, marginBlock: "1rem 0" }} /> */}
						</div>
					</Accordion.Collapse>
				</div>
			</Accordion.Item>
			{/* GAZPROM MEDIA */}
			<Accordion.Item
				eventKey="2"
				bsPrefix="_"
				className={accordionStyles.accordion__item}
			>
				<h3 className={accordionStyles.accordion__header}>
					<Accordion.Button
						bsPrefix="_"
						className={clsx(
							accordionStyles.accordion__button,
							styles.experience__button,
							font.className,
						)}
					>
						<span className={styles.experience__when}>
							(
							<time
								dateTime={getFormattedDateTime({
									year: 2018,
									month: 9,
									day: 1,
									timezoneOffset: 60 * 3,
								})}
							>
								September 2018
							</time>{" "}
							-{" "}
							<time
								dateTime={getFormattedDateTime({
									year: 2019,
									month: 5,
									day: 1,
									timezoneOffset: 60 * 3,
								})}
							>
								May 2019
							</time>
							)
						</span>
						<span className={styles.experience__duration}>
							<span className="visually-hidden">
								Duration of the work at gazprom RTV media company is
							</span>{" "}
							9 months
						</span>
						<span className={styles.experience__position}>
							Frontend developer
						</span>
						<span className={styles.experience__where}>
							Gazprom RTV Media - Moscow, Russia 🇷🇺
						</span>
					</Accordion.Button>
				</h3>
				<div className={accordionStyles.accordion__wrapper}>
					<Accordion.Collapse
						eventKey="2"
						bsPrefix="_"
						className={accordionStyles.accordion__collapse}
					>
						<div className={accordionStyles.accordion__body}>
							Ensuring WEB interests of the company in the field of TV and
							Internet broadcasting. - development of a free NPM package React
							Range Gallery for the needs of internal projects.
							https://andrew-dyachenko.github.io/react-range-gallery/ using CSS
							GRID, Flexbox, React, Redux. assembly with CRA - creating a
							landing page for the project Money or Shame (Final)
							https://dip.tnt4.ru/ using CSS GRID, Flexbox, JS (ES5,6), building
							with custom gulp - layout of adaptive, thematic E-mail
							newsletters, on the ZURB Emails (SASS) assembler platform -
							development in JS (ES5,6) of a minimalistic tracker module for
							collecting and sending analytical data from user pages from
							scratch on the Parcel JS platform Widgets, forms based on React: -
							registration of participants in the children contest of the TV
							presenter https://superkanal.ru/casting-test - superchannel
							settings: https://superkanal.ru/nastroi_super - search for
							cameramen by city: https://tnt4.ru/nastroi_tnt4 - support and
							modification of existing company projects, such as
							https://tnt4.ru/, https://superkanal.ru/ using CSS, JS, HTML
							Stack: JS (ES5,6), React, Redux, HTML5, CSS3, CRA, Gulp, Jira,
							Slack, Gitlab, Git, BEM.
						</div>
					</Accordion.Collapse>
				</div>
			</Accordion.Item>
			{/* URRAA & FRESHBROCCOLI */}
			<Accordion.Item
				eventKey="3"
				bsPrefix="_"
				className={accordionStyles.accordion__item}
			>
				<h3 className={accordionStyles.accordion__header}>
					<Accordion.Button
						bsPrefix="_"
						className={clsx(
							accordionStyles.accordion__button,
							styles.experience__button,
							font.className,
						)}
					>
						<span className={styles.experience__when}>
							(
							<time
								dateTime={getFormattedDateTime({
									year: 2016,
									month: 10,
									day: 24,
									timezoneOffset: 60 * 3,
								})}
							>
								October 2016
							</time>{" "}
							-{" "}
							<time
								dateTime={getFormattedDateTime({
									year: 2017,
									month: 10,
									day: 27,
									timezoneOffset: 60 * 3,
								})}
							>
								October 2017
							</time>
							)
						</span>
						<span className={styles.experience__duration}>
							<span className="visually-hidden">
								Duration of the work at UURRAA & Freshbroccoli company is
							</span>{" "}
							1 year
						</span>
						<span className={styles.experience__position}>
							Frontend developer
						</span>
						<span className={styles.experience__where}>
							UURRAA & Freshbroccoli - Moscow, Russia 🇷🇺
						</span>
					</Accordion.Button>
				</h3>
				<div className={accordionStyles.accordion__wrapper}>
					<Accordion.Collapse
						eventKey="3"
						bsPrefix="_"
						className={accordionStyles.accordion__collapse}
					>
						<div className={accordionStyles.accordion__body}>
							Wholesale distributor of consumer goods. Led 2 projects. 1)
							Development and support of the main web service of the company
							https://urraa.ru/, an online store for wholesale clothing. -
							development of new pages based on Bitrix using JS (ES5) - layout
							using CSS3, HTML5, jQuery, Bootstrap 4 2) Development and support
							of a subsidiary project of the company https://freshbroccoli.ru/,
							online store for retail sales of quality food products. -
							development of new pages based on Bitrix using JS (ES5) - layout
							using CSS3, HTML5, jQuery, Bootstrap 4 - regular layout of
							adaptive, thematic E-mail newsletters on the ZURB Emails (SASS)
							collector platform - development and implementation of interesting
							widgets based on Canvas
						</div>
					</Accordion.Collapse>
				</div>
			</Accordion.Item>
			{/* MAGORA SYSTEMS*/}
			<Accordion.Item
				eventKey="4"
				bsPrefix="_"
				className={accordionStyles.accordion__item}
			>
				<h3 className={accordionStyles.accordion__header}>
					<Accordion.Button
						bsPrefix="_"
						className={clsx(
							accordionStyles.accordion__button,
							styles.experience__button,
							font.className,
						)}
					>
						<span className={styles.experience__when}>
							(
							<time
								dateTime={getFormattedDateTime({
									year: 2015,
									month: 1,
									day: 10,
									timezoneOffset: 60 * 7,
								})}
							>
								January 2015
							</time>{" "}
							-{" "}
							<time
								dateTime={getFormattedDateTime({
									year: 2015,
									month: 7,
									day: 1,
									timezoneOffset: 60 * 7,
								})}
							>
								July 2015
							</time>
							)
						</span>
						<span className={styles.experience__duration}>
							<span className="visually-hidden">
								Duration of the work at Magora Systems company is
							</span>{" "}
							7 months
						</span>
						<span className={styles.experience__position}>
							Frontend developer
						</span>
						<span className={styles.experience__where}>
							Magora Systems - Novosibirsk, Russia 🇷🇺
						</span>
					</Accordion.Button>
				</h3>
				<div className={accordionStyles.accordion__wrapper}>
					<Accordion.Collapse
						eventKey="4"
						bsPrefix="_"
						className={accordionStyles.accordion__collapse}
					>
						<div className={accordionStyles.accordion__body}>
							Work on large foreign outsourcing projects. Led 3 projects. 1)
							Development of a web-platform for an elite taxi in London, focused
							on Arab clients. - writing frontend in JS (ES5) and Bootstrap 3 -
							layout on jQuery, HTML5, CSS3 - active work with the Hightcharts
							library to build sections of financial and other reporting, for
							example, line and share charts 2) Development of an Indian dating
							social network like Badoo, a web platform. - writing frontend in
							JS (ES5) and FlatUI - layout on jQuery, HTML5, CSS3 3) A web-based
							music platform like SoundCloud. - writing frontend in JS (ES5) and
							Bootstrap 3 - layout on jQuery, HTML5, CSS3 - layout of E-mail
							newsletters All projects supported IE10+, pixel perfect layout.
						</div>
					</Accordion.Collapse>
				</div>
			</Accordion.Item>
			{/* BTI Pro */}
			<Accordion.Item
				eventKey="5"
				bsPrefix="_"
				className={accordionStyles.accordion__item}
			>
				<h3 className={accordionStyles.accordion__header}>
					<Accordion.Button
						bsPrefix="_"
						className={clsx(
							accordionStyles.accordion__button,
							styles.experience__button,
							font.className,
						)}
					>
						<span className={styles.experience__when}>
							(
							<time
								dateTime={getFormattedDateTime({
									year: 2014,
									month: 7,
									day: 1,
									timezoneOffset: 60 * 7,
								})}
							>
								July 2014
							</time>{" "}
							-{" "}
							<time
								dateTime={getFormattedDateTime({
									year: 2014,
									month: 12,
									day: 1,
									timezoneOffset: 60 * 7,
								})}
							>
								December 2014
							</time>
							)
						</span>
						<span className={styles.experience__duration}>
							<span className="visually-hidden">
								Duration of the work at BTI Pro company is
							</span>{" "}
							6 months
						</span>
						<span className={styles.experience__position}>
							Frontend developer
						</span>
						<span className={styles.experience__where}>
							BTI Pro - Novosibirsk, Russia 🇷🇺
						</span>
					</Accordion.Button>
				</h3>
				<div className={accordionStyles.accordion__wrapper}>
					<Accordion.Collapse
						eventKey="5"
						bsPrefix="_"
						className={accordionStyles.accordion__collapse}
					>
						<div className={accordionStyles.accordion__body}>
							The company is focused on the real estate market. I participated
							in the development of two start-up projects. My responsibilities
							included site layout and front-end programming. I got invaluable
							experience in start-up projects start and honest my first
							experience in working with language Javascript.
						</div>
					</Accordion.Collapse>
				</div>
			</Accordion.Item>
			{/* Omega Design*/}
			<Accordion.Item
				eventKey="6"
				bsPrefix="_"
				className={accordionStyles.accordion__item}
			>
				<h3 className={accordionStyles.accordion__header}>
					<Accordion.Button
						bsPrefix="_"
						className={clsx(
							accordionStyles.accordion__button,
							styles.experience__button,
							font.className,
						)}
					>
						<span className={styles.experience__when}>
							(
							<time
								dateTime={getFormattedDateTime({
									year: 2013,
									month: 8,
									day: 1,
									timezoneOffset: 60 * 7,
								})}
							>
								August 2013
							</time>{" "}
							-{" "}
							<time
								dateTime={getFormattedDateTime({
									year: 2014,
									month: 5,
									day: 1,
									timezoneOffset: 60 * 7,
								})}
							>
								May 2014
							</time>
							)
						</span>
						<span className={styles.experience__duration}>
							<span className="visually-hidden">
								Duration of the work at Omega Design company is
							</span>{" "}
							10 months
						</span>
						<span className={styles.experience__position}>HTML developer</span>
						<span className={styles.experience__where}>
							Omega Design - Krasnoyarsk, Russia 🇷🇺
						</span>
					</Accordion.Button>
				</h3>
				<div className={accordionStyles.accordion__wrapper}>
					<Accordion.Collapse
						eventKey="6"
						bsPrefix="_"
						className={accordionStyles.accordion__collapse}
					>
						<div className={accordionStyles.accordion__body}>
							A small outsourcing company, participated in the development and
							development of project projects for regional and federal
							customers. From online stores of children things to analogues
							Avito. Some projects were taken from scratch, but most were
							Legacy, so the main task was mainly to edit and maintain the code.
							- work with WordPress, Joomla, Droopal platforms - interaction
							with the backend part of sites written in PHP (Yii) - MPA layout
							on CSS3, jQuery, HTML5 Stack: CSS3, jQuery, HTML5, WordPress,
							Joomla, Droopal, PHP, Yii, Redmine
						</div>
					</Accordion.Collapse>
				</div>
			</Accordion.Item>
			{/* Alfateam */}
			<Accordion.Item
				eventKey="7"
				bsPrefix="_"
				className={accordionStyles.accordion__item}
			>
				<h3 className={accordionStyles.accordion__header}>
					<Accordion.Button
						bsPrefix="_"
						className={clsx(
							accordionStyles.accordion__button,
							styles.experience__button,
							font.className,
						)}
					>
						<span className={styles.experience__when}>
							(
							<time
								dateTime={getFormattedDateTime({
									year: 2012,
									month: 12,
									day: 1,
									timezoneOffset: 60 * 7,
								})}
							>
								December 2012
							</time>{" "}
							-{" "}
							<time
								dateTime={getFormattedDateTime({
									year: 2013,
									month: 8,
									day: 1,
									timezoneOffset: 60 * 7,
								})}
							>
								August 2013
							</time>
							)
						</span>
						<span className={styles.experience__duration}>
							<span className="visually-hidden">
								Duration of the work at Alfateam company is
							</span>{" "}
							9 months
						</span>
						<span className={styles.experience__position}>HTML developer</span>
						<span className={styles.experience__where}>
							Alfateam - Krasnoyarsk, Russia 🇷🇺
						</span>
					</Accordion.Button>
				</h3>
				<div className={accordionStyles.accordion__wrapper}>
					<Accordion.Collapse
						eventKey="7"
						bsPrefix="_"
						className={accordionStyles.accordion__collapse}
					>
						<div className={accordionStyles.accordion__body}>
							<p>
								Created online clothing stores on the Bitrix system.
								Collectively led and completed at least 5 projects.
							</p>
							<p>
								- layout of sites on the Bitrix system - support for older
								browsers (IE7, IE8, IE9, IE10, IE11) - work with markup and
								style sheets in HTML and CSS
							</p>
						</div>
					</Accordion.Collapse>
				</div>
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

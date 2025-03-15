"use client";

// import { useId } from "react";
import { Accordion } from "react-bootstrap";
// import { useAccordionButton } from "react-bootstrap/AccordionButton";
import accordionStyles from "../Accordion/accordion.module.scss";
import styles from "./experience.module.scss";
// import { FaExternalLinkAlt } from "react-icons/fa";
import getFormattedDateTime from "../../utils/getFormattedDateTime";
import { FaExternalLinkAlt, FaGlobeAfrica } from "react-icons/fa";
import { Sofia_Sans } from "next/font/google";
import clsx from "clsx";
import Image from "next/image";

import b2broker from "../../../../public/experience/b2broker.svg";
import zfx from "../../../../public/experience/zfx.png";
import gazprommedia from "../../../../public/experience/gazprommedia.png";
import uurraa from "../../../../public/experience/uurraa.png";
import freshbroccoli from "../../../../public/experience/freshbroccoli.svg";
import magorasystems from "../../../../public/experience/magora-systems.png";
import btipro from "../../../../public/experience/btipro.png";
import omegadesignpro from "../../../../public/experience/omegadesignpro.png";
import alfateam from "../../../../public/experience/alfateam-favicon.png";
import llcitsolutions from "../../../../public/experience/llcitsolutions-512x512.png";

import { useTranslations } from "next-intl";
import parse from "html-react-parser";

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
	subsets: ["latin", "cyrillic"],
});

export default function Experience() {
	const t = useTranslations("experience");
	return (
		<Accordion
			defaultActiveKey={["5"]}
			alwaysOpen
			className={accordionStyles.accordion}
		>
			{/* B2BROKER START */}
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
									year: 2024,
									month: 4,
									day: 10,
									hour: 0,
									timezoneOffset: 60 * 4,
								})}
							>
								{t.raw("list")[0].from}
							</time>{" "}
							-{" "}
							<time
								dateTime={getFormattedDateTime({
									year: 2024,
									month: 9,
									day: 26,
									hour: 0,
									timezoneOffset: 60 * 4,
								})}
							>
								{t.raw("list")[0].to}
							</time>
							)
						</span>
						<span className={styles.experience__duration}>
							{t.raw("list")[0].duration}
						</span>
						<span className={styles.experience__position}>
							{t.raw("list")[0].position}
						</span>
						<span className={styles.experience__where}>
							<Image
								className={styles["experience__where-icon"]}
								src={b2broker}
								height={20}
								alt="B2Broker logo"
							/>
							{t.raw("list")[0].company} - {t.raw("list")[0].where}
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
							<div>
								<a
									href="https://b2broker.com/"
									target="_blank"
									rel="noopener noreferrer"
									style={{
										display: "inline-flex",
										alignItems: "center",
									}}
								>
									<span className="print-invisible">b2broker</span>
									<span className="print-inline-visible">
										https://b2broker.com/
									</span>
									<FaExternalLinkAlt
										style={{
											fontSize: "0.75em",
											marginInlineStart: "0.3333em",
										}}
									/>
								</a>
							</div>
							<p>{t.raw("list")[0].paragraph}</p>
							<ol
								style={{
									listStylePosition: "inside",
									paddingInline: 0,
								}}
								className="cv"
							>
								<li>
									<a
										href="https://b2core.com/"
										target="_blank"
										rel="noopener noreferrer"
										style={{
											display: "inline-flex",
											alignItems: "center",
										}}
									>
										<span className="print-invisible">B2Core</span>
										<span className="print-inline-visible">
											https://b2core.com/
										</span>
										<FaExternalLinkAlt
											style={{
												fontSize: "0.75em",
												marginInlineStart: "0.3333em",
											}}
										/>
									</a>{" "}
									- {parse(t.raw("list")[0].projects.b2broker)}
								</li>
								<li>
									<a
										href="https://b2prime.com/"
										target="_blank"
										rel="noopener noreferrer"
										style={{
											display: "inline-flex",
											alignItems: "center",
										}}
									>
										<span className="print-invisible">B2Prime</span>
										<span className="print-inline-visible">
											https://b2prime.com/
										</span>
										<FaExternalLinkAlt
											style={{
												fontSize: "0.75em",
												marginInlineStart: "0.3333em",
											}}
										/>
									</a>{" "}
									- {parse(t.raw("list")[0].projects.b2core)}
								</li>
							</ol>
							<h4>{t.raw("list")[0].responsibilities.title}</h4>
							<dl
								style={{
									paddingInlineStart: 0,
									marginBlockEnd: 0,
								}}
							>
								<dt>
									<a
										href="https://b2core.com/"
										target="_blank"
										rel="noopener noreferrer"
										style={{
											display: "inline-flex",
											alignItems: "center",
											color: "inherit",
										}}
									>
										B2Core{" "}
										<FaExternalLinkAlt
											style={{
												fontSize: "0.75em",
												marginInlineStart: "0.3333em",
											}}
										/>
									</a>
								</dt>
								<dt>
									<a
										href="https://b2prime.com/"
										target="_blank"
										rel="noopener noreferrer"
										style={{
											display: "inline-flex",
											alignItems: "center",
											color: "inherit",
										}}
									>
										B2Prime{" "}
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
									<ul className="cv">
										<li>
											{
												t.raw("list")[0].responsibilities[
													"b2broker-and-b2core"
												][0]
											}
											<ul>
												<li>
													{parse(
														t.raw("list")[0].responsibilities[
															"b2broker-and-b2core"
														][1][0],
													)}
												</li>
												<li>
													{parse(
														t.raw("list")[0].responsibilities[
															"b2broker-and-b2core"
														][1][1],
													)}
												</li>
												<li>
													{
														t.raw("list")[0].responsibilities[
															"b2broker-and-b2core"
														][1][2]
													}
												</li>
												<li>
													{parse(
														t.raw("list")[0].responsibilities[
															"b2broker-and-b2core"
														][1][3],
													)}
												</li>
											</ul>
										</li>
										<li>
											{
												t.raw("list")[0].responsibilities[
													"b2broker-and-b2core"
												][2]
											}
											<ul>
												<li>
													{parse(
														t.raw("list")[0].responsibilities[
															"b2broker-and-b2core"
														][3][0],
													)}
												</li>
												<li>
													{parse(
														t.raw("list")[0].responsibilities[
															"b2broker-and-b2core"
														][3][1],
													)}
												</li>
												<li>
													{
														t.raw("list")[0].responsibilities[
															"b2broker-and-b2core"
														][3][2]
													}
												</li>
												<li>
													{
														t.raw("list")[0].responsibilities[
															"b2broker-and-b2core"
														][3][3]
													}
												</li>
											</ul>
										</li>
										<li>
											{parse(
												t.raw("list")[0].responsibilities[
													"b2broker-and-b2core"
												][4],
											)}
										</li>
										<li>
											{parse(
												t.raw("list")[0].responsibilities[
													"b2broker-and-b2core"
												][5],
											)}
										</li>
										<li>
											{
												t.raw("list")[0].responsibilities[
													"b2broker-and-b2core"
												][6]
											}
										</li>
										<li>
											{parse(
												t.raw("list")[0].responsibilities[
													"b2broker-and-b2core"
												][7],
											)}
										</li>
									</ul>
								</dd>
							</dl>
						</div>
					</Accordion.Collapse>
				</div>
			</Accordion.Item>
			{/* B2BROKER END */}

			{/* INDIVIDUAL ENTREPRENEUR START */}
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
									year: 2023,
									month: 1,
									day: 25,
									hour: 0,
									timezoneOffset: 60 * 4,
								})}
							>
								{t.raw("list")[1].from}
							</time>{" "}
							-{" "}
							<time
								dateTime={getFormattedDateTime({
									timezoneOffset: 60 * 4,
								})}
							>
								{t.raw("list")[1].to}
							</time>
							)
						</span>
						<span className={styles.experience__duration}>
							{t.raw("list")[1].duration}
						</span>
						<span className={styles.experience__position}>
							{t.raw("list")[1].position}
						</span>
						<span className={styles.experience__where}>
							<FaGlobeAfrica className={styles["experience__where-icon"]} />
							{t.raw("list")[1].company} - {t.raw("list")[1].where}
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
							<p>
								{/* Providing Frontend development services for web
								applications, websites, NPM packages and emails,
								as an individual entrepreneur (freelancer /
								contractor). Including signing an{" "}
								<abbr title="Non-Disclosure Agreement">
									NDA
								</abbr>
								. */}
								{parse(t.raw("list")[1].paragraph)}
							</p>
							<h4>{t.raw("list")[1].responsibilities.title}</h4>
							<p>
								{/* Basically, worked with the classic trio (
								<strong>HTML</strong>, <strong>CSS</strong>,{" "}
								<strong>JavaScript</strong>), using (
								<strong>WordPress</strong>) and it&rsquo;s{" "}
								<abbr title="What You See Is What You Get">
									WYSIWYG
								</abbr>
								s. */}

								{parse(t.raw("list")[1].responsibilities["all-projects"][0])}
							</p>
						</div>
					</Accordion.Collapse>
				</div>
			</Accordion.Item>
			{/* INDIVIDUAL ENTREPRENEUR END */}

			{/* LLC ITSOLUTIONS START */}
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
									year: 2019,
									month: 10,
									day: 1,
									timezoneOffset: 60 * 3,
								})}
							>
								{t.raw("list")[2].from}
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
								{t.raw("list")[2].to}
							</time>
							)
						</span>
						<span className={styles.experience__duration}>
							{t.raw("list")[2].duration}
						</span>
						<span className={styles.experience__position}>
							{t.raw("list")[2].position}
						</span>
						<span className={styles.experience__where}>
							<Image
								className={clsx(
									styles["experience__where-icon"],
									styles["experience__where-icon--llcitsolutions"],
								)}
								src={llcitsolutions}
								width={20}
								alt="LLC ITSOLUTIONS logo"
							/>
							<Image
								className={clsx(
									styles["experience__where-icon"],
									styles["experience__where-icon--zfx"],
								)}
								src={zfx}
								width={20}
								alt="ZFX logo"
							/>
							{t.raw("list")[2].company} - {t.raw("list")[2].where}
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
							<div>
								<a
									href="https://its-nu.vercel.app/"
									target="_blank"
									rel="noopener noreferrer"
									style={{
										display: "inline-flex",
										alignItems: "center",
									}}
								>
									<span className="print-invisible">its-nu.vercel.app</span>
									<span className="print-inline-visible">
										https://its-nu.vercel.app/
									</span>
									<FaExternalLinkAlt
										style={{
											fontSize: "0.75em",
											marginInlineStart: "0.3333em",
										}}
									/>
								</a>
							</div>
							<p>{t.raw("list")[2].paragraph}</p>
							<ol
								style={{
									listStylePosition: "inside",
									paddingInline: 0,
								}}
							>
								<li>
									<a
										href="https://www.zfx.com/"
										target="_blank"
										rel="noopener noreferrer"
										style={{
											display: "inline-flex",
											alignItems: "center",
										}}
									>
										<span className="print-invisible">zfx.com</span>
										<span className="print-inline-visible">
											https://www.zfx.com
										</span>{" "}
										<FaExternalLinkAlt
											style={{
												fontSize: "0.75em",
												marginInlineStart: "0.3333em",
											}}
										/>
									</a>{" "}
									- {t.raw("list")[2].projects["zfc.com"]}
								</li>
								<li>
									<a
										href="https://my.zfx.com/"
										target="_blank"
										rel="noopener noreferrer"
										style={{
											display: "inline-flex",
											alignItems: "center",
										}}
									>
										<span className="print-invisible">my.zfx.com</span>
										<span className="print-inline-visible">
											https://my.zfx.com
										</span>{" "}
										<FaExternalLinkAlt
											style={{
												fontSize: "0.75em",
												marginInlineStart: "0.3333em",
											}}
										/>
									</a>{" "}
									- {t.raw("list")[2].projects["my_zfx_com"]}
								</li>
								<li>
									<a
										href="https://its-nu.vercel.app/"
										// biome-ignore lint/a11y/noBlankTarget: <The site is under our control>
										target="_blank"
										style={{
											display: "inline-flex",
											alignItems: "center",
										}}
									>
										<span className="print-invisible">its-nu.vercel.app</span>
										<span className="print-inline-visible">
											https://its-nu.vercel.app
										</span>{" "}
										<FaExternalLinkAlt
											style={{
												fontSize: "0.75em",
												marginInlineStart: "0.3333em",
											}}
										/>
									</a>{" "}
									- {parse(t.raw("list")[2].projects["its-nu_vercel_app"])}
								</li>
							</ol>
							<h4>{t.raw("list")[2].responsibilities.title}</h4>
							<dl
								style={{
									paddingInlineStart: 0,
									marginBlockEnd: 0,
								}}
							>
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
								<dd
									style={{
										margin: 0,
										paddingInlineStart: "1rem",
										paddingBlock: "1rem",
									}}
								>
									<ul className="cv">
										<li>
											{parse(t.raw("list")[2].responsibilities.zfx_com[0])}
										</li>
										<li>
											{parse(t.raw("list")[2].responsibilities.zfx_com[1])}
										</li>
										<li>
											{parse(t.raw("list")[2].responsibilities.zfx_com[2])}
										</li>
										<li>
											{parse(t.raw("list")[2].responsibilities.zfx_com[3])}
										</li>
										<li>
											{parse(t.raw("list")[2].responsibilities.zfx_com[4])}
										</li>
										<li>
											{parse(t.raw("list")[2].responsibilities.zfx_com[5])}
										</li>
										<li>
											{parse(t.raw("list")[2].responsibilities.zfx_com[6])}
										</li>
										<li>
											{parse(t.raw("list")[2].responsibilities.zfx_com[7])}
										</li>
										<li>{t.raw("list")[2].responsibilities.zfx_com[8]}</li>
										<li>
											{parse(t.raw("list")[2].responsibilities["zfx_com"][9])}
										</li>
										<li>
											{parse(t.raw("list")[2].responsibilities["zfx_com"][10])}
										</li>
										<li>
											{parse(t.raw("list")[2].responsibilities["zfx_com"][11])}
										</li>
										<li>
											{parse(t.raw("list")[2].responsibilities["zfx_com"][12])}
										</li>
										<li>
											{parse(t.raw("list")[2].responsibilities["zfx_com"][13])}
										</li>
										<li>
											{parse(t.raw("list")[2].responsibilities["zfx_com"][14])}
										</li>
									</ul>
								</dd>
								{/* /ZFX.COM */}
								{/* MY.ZFX.COM */}
								<dt>
									<a
										href="https://my.zfx.com/"
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
									<ul className="cv">
										<li>
											{parse(
												t.raw("list")[2].responsibilities["my_zfx_com"][0],
											)}
											{/* Support and improve the legacy app (
											<strong>Vue</strong>{" "}
											<code
												style={{ fontSize: "0.75em" }}
											>
												v2-3
											</code>
											). */}
										</li>
										<li>
											{/* Adding languages to the
											multi-language switcher using (
											<strong>Vue</strong>) i18n library (
											<strong>Inter</strong>
											). */}
											{parse(
												t.raw("list")[2].responsibilities["my_zfx_com"][1],
											)}
										</li>
										<li>
											{/* Refactoring pages to support
											bi-directional content (
											<strong>LTR</strong>,{" "}
											<strong>RTL</strong>) to include
											Arabic language. */}
											{parse(
												t.raw("list")[2].responsibilities["my_zfx_com"][2],
											)}
										</li>
										<li>
											{/* Setting up data reception using (
											<strong>REST API</strong>,{" "}
											<strong>WebSocket</strong>). */}
											{parse(
												t.raw("list")[2].responsibilities["my_zfx_com"][3],
											)}
										</li>
										<li>
											{/* Communication with team members and
											business customers through instant
											messengers and online audio-video
											meetings in two languages (
											<strong>English</strong>,{" "}
											<strong>Russian</strong>). */}
											{parse(
												t.raw("list")[2].responsibilities["my_zfx_com"][4],
											)}
										</li>
									</ul>
								</dd>
								{/* /MY.ZFX.COM */}
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
									<ul className="cv">
										<li>
											{parse(
												t.raw("list")[2].responsibilities[
													"its-nu_vercel_app"
												][0],
											)}
										</li>
										<li>
											{parse(
												t.raw("list")[2].responsibilities[
													"its-nu_vercel_app"
												][1],
											)}
										</li>
										<li>
											{parse(
												t.raw("list")[2].responsibilities[
													"its-nu_vercel_app"
												][2],
											)}
										</li>
										<li>
											{parse(
												t.raw("list")[2].responsibilities[
													"its-nu_vercel_app"
												][3],
											)}
										</li>
										<li>
											{parse(
												t.raw("list")[2].responsibilities[
													"its-nu_vercel_app"
												][4],
											)}
										</li>
										<li>
											{parse(
												t.raw("list")[2].responsibilities[
													"its-nu_vercel_app"
												][5],
											)}
										</li>
										<li>
											{parse(
												t.raw("list")[2].responsibilities[
													"its-nu_vercel_app"
												][6],
											)}
										</li>
										<li>
											{parse(
												t.raw("list")[2].responsibilities[
													"its-nu_vercel_app"
												][7],
											)}
										</li>
										<li>
											{
												t.raw("list")[2].responsibilities[
													"its-nu_vercel_app"
												][8]
											}
										</li>
									</ul>
								</dd>
								{/* /ITSOLUTIONS APP */}
							</dl>
						</div>
					</Accordion.Collapse>
				</div>
			</Accordion.Item>
			{/* LLC ITSOLUTIONS END */}

			{/* GAZPROM MEDIA START */}
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
									year: 2018,
									month: 9,
									day: 1,
									timezoneOffset: 60 * 3,
								})}
							>
								{t.raw("list")[3].from}
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
								{t.raw("list")[3].to}
							</time>
							)
						</span>
						<span className={styles.experience__duration}>
							{t.raw("list")[3].duration}
						</span>
						<span className={styles.experience__position}>
							{t.raw("list")[3].position}
						</span>
						<span className={styles.experience__where}>
							<Image
								className={clsx(
									styles["experience__where-icon"],
									styles["experience__where-icon--gazprommedia"],
								)}
								src={gazprommedia}
								height={20}
								alt="Gazprom Media logo"
							/>
							{t.raw("list")[3].company}
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
							<div>
								<a
									href="https://www.gazprom-media.com/"
									target="_blank"
									rel="noopener noreferrer"
									style={{
										display: "inline-flex",
										alignItems: "center",
									}}
								>
									<span className="print-invisible">gazprom-media.com</span>
									<span className="print-inline-visible">
										https://www.gazprom-media.com/
									</span>
									<FaExternalLinkAlt
										style={{
											fontSize: "0.75em",
											marginInlineStart: "0.3333em",
										}}
									/>
								</a>
							</div>
							<p>{t.raw("list")[3].paragraph}</p>
							<ol
								style={{
									listStylePosition: "inside",
									paddingInline: 0,
								}}
							>
								{/* DIP.TNT4.RU */}
								<li>
									<dfn>
										<a
											href="https://dip.tnt4.ru/"
											target="_blank"
											rel="noopener noreferrer"
											style={{
												display: "inline-flex",
												alignItems: "center",
											}}
										>
											<span className="print-invisible">dip.tnt4.ru</span>
											<span className="print-inline-visible">
												https://dip.tnt4.ru
											</span>{" "}
											<FaExternalLinkAlt
												style={{
													fontSize: "0.75em",
													marginInlineStart: "0.3333em",
												}}
											/>
										</a>
									</dfn>{" "}
									-{" "}
									{/*Landing for TV show &quot;Money or
									Shame&ldquo; (Final season). */}
									{t.raw("list")[3].projects.dip_tnt4_ru}
								</li>
								{/* /DIP.TNT4.RU */}
								{/* SUBBOTA.TV */}
								<li>
									<dfn>
										<a
											href="https://subbota.tv/"
											target="_blank"
											rel="noopener noreferrer"
											style={{
												display: "inline-flex",
												alignItems: "center",
											}}
										>
											<span className="print-invisible">subbota.tv</span>
											<span className="print-inline-visible">
												https://subbota.tv
											</span>{" "}
											<FaExternalLinkAlt
												style={{
													fontSize: "0.75em",
													marginInlineStart: "0.3333em",
												}}
											/>
										</a>
									</dfn>{" "}
									- {t.raw("list")[3].projects.subbota_tv}
								</li>
								{/* TNT4.RU */}
								<li>
									<dfn>
										<a
											href="https://tnt4.ru/"
											// biome-ignore lint/a11y/noBlankTarget: <The site is under our control>
											target="_blank"
											style={{
												display: "inline-flex",
												alignItems: "center",
											}}
										>
											<span className="print-invisible">tnt4.ru</span>
											<span className="print-inline-visible">
												https://tnt4.ru
											</span>{" "}
											<FaExternalLinkAlt
												style={{
													fontSize: "0.75em",
													marginInlineStart: "0.3333em",
												}}
											/>
										</a>
									</dfn>{" "}
									- {t.raw("list")[3].projects.tnt4_ru}
								</li>
							</ol>
							<h4>{t.raw("list")[3].responsibilities.title}</h4>
							<dl
								style={{
									paddingInlineStart: 0,
									marginBlockEnd: 0,
								}}
							>
								{/* DIP.TNT4.RU */}
								<dt>
									<a
										href="https://dip.tnt4.ru/"
										target="_blank"
										rel="noopener noreferrer"
										style={{
											display: "inline-flex",
											alignItems: "center",
											color: "inherit",
										}}
									>
										dip.tnt4.ru{" "}
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
									<ul className="cv">
										<li>
											{/* Start the project from a scratch
											with (<strong>Gulp.js</strong>). */}
											{parse(t.raw("list")[3].responsibilities.dip_tnt4_ru[0])}
										</li>
										<li>
											{/* Create adaptive, pixel-perfect
											layout using (<strong>PUG</strong>,{" "}
											<strong>SASS</strong>). */}
											{parse(t.raw("list")[3].responsibilities.dip_tnt4_ru[1])}
										</li>
										<li>
											{/* Write business logic using (
											<strong>JavaScript</strong>{" "}
											<code
												style={{ fontSize: "0.75em" }}
											>
												^ES6
											</code>
											). */}
											{parse(t.raw("list")[3].responsibilities.dip_tnt4_ru[2])}
										</li>
										<li>
											{/* Add an ability to play video in full
											screen mode. */}
											{t.raw("list")[3].responsibilities.dip_tnt4_ru[3]}
										</li>
										<li>
											{/* Connect and set up analytical
											metrics (
											<strong>Google Analytics</strong>,{" "}
											<strong>Yandex Metrika</strong>). */}
											{parse(t.raw("list")[3].responsibilities.dip_tnt4_ru[4])}
										</li>
										<li>
											{/* Cross-browser support down to{" "}
											<strong>2018</strong> (last 2
											version). */}
											{parse(t.raw("list")[3].responsibilities.dip_tnt4_ru[5])}
										</li>
										<li>
											{/* Configuring the assembly using (
											<strong>Gulp.js</strong>,{" "}
											<strong>Node.js</strong>). */}
											{parse(t.raw("list")[3].responsibilities.dip_tnt4_ru[6])}
										</li>
										<li>
											{/* Communication with team members and
											a head of web department through
											instant messengers and offline
											meetings. */}
											{t.raw("list")[3].responsibilities.dip_tnt4_ru[7]}
										</li>
									</ul>
								</dd>
								{/* SUBBOTA.TV */}
								<dt>
									<a
										href="https://subbota.tv/"
										target="_blank"
										rel="noopener noreferrer"
										style={{
											display: "inline-flex",
											alignItems: "center",
											color: "inherit",
										}}
									>
										subbota.tv{" "}
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
									<ul className="cv">
										<li>
											{/* Support and improve the legacy web
											site based at (
											<strong>Laravel</strong>). */}
											{parse(t.raw("list")[3].responsibilities.subbota_tv[0])}
										</li>
										<li>
											{/* Layout of new and modification of
											existing pages using (
											<strong>HTML</strong>,{" "}
											<strong>CSS</strong>,{" "}
											<strong>JavaScript</strong>{" "}
											<code
												style={{ fontSize: "0.75em" }}
											>
												^ES6
											</code>
											). */}
											{parse(t.raw("list")[3].responsibilities.subbota_tv[1])}
										</li>
										<li>
											{/* Extend the list of tracked items and
											user events on existing pages using
											(<strong>Google Analytics</strong>). */}
											{parse(t.raw("list")[3].responsibilities.subbota_tv[2])}
										</li>
										<li>
											{/* Create embedded (
											<strong>React</strong>{" "}
											<code
												style={{ fontSize: "0.75em" }}
											>
												v16
											</code>
											) applications with (
											<strong>Create React App</strong>)
											for individual pages, such as: */}
											{parse(t.raw("list")[3].responsibilities.subbota_tv[3])}
											<ul>
												<li>
													<a
														href="https://subbota.tv/casting-test"
														target="_blank"
														rel="noopener noreferrer"
													>
														<span className="print-invisible">
															/casting-test
														</span>
														<span className="print-inline-visible">
															https://subbota.tv/casting-test
														</span>{" "}
														<FaExternalLinkAlt
															style={{
																fontSize: "0.75em",
																marginInlineStart: "0.3333em",
															}}
														/>
													</a>{" "}
													-{" "}
													{parse(
														t.raw("list")[3].responsibilities.subbota_tv[4][0],
													)}
												</li>
												<li>
													<a
														href="https://subbota.tv/nastroi_subboty"
														target="_blank"
														rel="noopener noreferrer"
													>
														<span className="print-invisible">
															/nastroi_subboty
														</span>
														<span className="print-inline-visible">
															https://subbota.tv/nastroi_subboty
														</span>{" "}
														<FaExternalLinkAlt
															style={{
																fontSize: "0.75em",
																marginInlineStart: "0.3333em",
															}}
														/>
													</a>{" "}
													-{" "}
													{parse(
														t.raw("list")[3].responsibilities.subbota_tv[4][1],
													)}
												</li>
											</ul>
										</li>
										<li>
											{parse(
												t.raw("list")[3].responsibilities.subbota_tv[5][0],
											)}{" "}
											<dfn>
												<a
													href="https://andrew-dyachenko.github.io/react-range-gallery/"
													target="_blank"
													rel="noopener noreferrer"
													style={{
														display: "inline-flex",
														alignItems: "center",
													}}
												>
													<span className="print-invisible">
														react-range-gallery
													</span>
													<span className="print-inline-visible">
														https://andrew-dyachenko.github.io/react-range-gallery
													</span>{" "}
													<FaExternalLinkAlt
														style={{
															fontSize: "0.75em",
															marginInlineStart: "0.3333em",
														}}
													/>
												</a>
											</dfn>{" "}
											{/* - The open source NPM package
											builded with (
											<strong>
												Create React Library
											</strong>
											), for the internal project pages
											reuse. */}
											{parse(
												t.raw("list")[3].responsibilities.subbota_tv[5][1],
											)}
										</li>
										<li>
											{/* Setting up data reception using (
											<strong>REST API</strong>
											). */}
											{parse(t.raw("list")[3].responsibilities.subbota_tv[6])}
										</li>
										<li>
											{/* Optimize applications loading by
											caching data in (
											<strong>localStorage</strong>,{" "}
											<strong>sessionStorage</strong>). */}
											{parse(t.raw("list")[3].responsibilities.subbota_tv[7])}
										</li>
										<li>
											{/* Optimize applications response to
											display data using (
											<strong>debouncing</strong>). */}
											{parse(t.raw("list")[3].responsibilities.subbota_tv[8])}
										</li>
										<li>
											{/* Create regular thematic, adaptive
											Email newsletters, with support for
											regular email clients using (
											<strong>ZURB</strong>) framework. */}
											{parse(t.raw("list")[3].responsibilities.subbota_tv[9])}
										</li>
										<li>
											{/* Communication with team members and
											a head of web department through
											instant messengers and offline
											meetings. */}
											{t.raw("list")[3].responsibilities.subbota_tv[10]}
										</li>
									</ul>
								</dd>
								{/* TNT4.RU */}
								<dt>
									<a
										href="https://tnt4.ru/"
										// biome-ignore lint/a11y/noBlankTarget: <The site is under our control>
										target="_blank"
										style={{
											display: "inline-flex",
											alignItems: "center",
											color: "inherit",
										}}
									>
										tnt4.ru{" "}
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
									<ul className="cv">
										<li>
											{/* Support and improve the legacy web
											site based at (
											<strong>Laravel</strong>). */}
											{parse(t.raw("list")[3].responsibilities.tnt4_ru[0])}
										</li>
										<li>
											{/* Layout of new and modification of existing pages using (
											<strong>HTML</strong>, <strong>CSS</strong>,{" "}
											<strong>JavaScript</strong>{" "}
											<code style={{ fontSize: "0.75em" }}>^ES6</code>
											). */}
											{parse(t.raw("list")[3].responsibilities.tnt4_ru[1])}
										</li>
										<li>
											{/* Extend the list of tracked items and user events on
											existing pages using (<strong>Google Analytics</strong>). */}
											{parse(t.raw("list")[3].responsibilities.tnt4_ru[2])}
										</li>
										<li>
											{/* Create embedded (<strong>React</strong>{" "}
											<code style={{ fontSize: "0.75em" }}>v16</code>)
											applications with (<strong>Create React App</strong>) for
											individual pages, such as: */}
											{parse(t.raw("list")[3].responsibilities.tnt4_ru[3])}
											<ul>
												<li>
													<a
														href="https://tnt4.ru/nastroi_tnt4/"
														target="_blank"
														rel="noopener noreferrer"
													>
														<span className="print-invisible">
															/nastroi_tnt4
														</span>
														<span className="print-inline-visible">
															https://tnt4.ru/nastroi_tnt4
														</span>{" "}
														<FaExternalLinkAlt
															style={{
																fontSize: "0.75em",
																marginInlineStart: "0.3333em",
															}}
														/>
													</a>{" "}
													{/* - Search for teleoperators by city to connect. */}
													{t.raw("list")[3].responsibilities.tnt4_ru[4][0]}
												</li>
											</ul>
										</li>
										<li>
											{/* Setting up data reception using (<strong>REST API</strong>
											). */}
											{parse(t.raw("list")[3].responsibilities.tnt4_ru[5])}
										</li>
										<li>
											{/* Optimize applications loading by caching data in (
											<strong>localStorage</strong>,{" "}
											<strong>sessionStorage</strong>). */}
											{parse(t.raw("list")[3].responsibilities.tnt4_ru[6])}
										</li>
										<li>
											{/* Optimize applications response to display data using (
											<strong>debouncing</strong>). */}
											{parse(t.raw("list")[3].responsibilities.tnt4_ru[7])}
										</li>
										<li>
											{/* Create regular thematic, adaptive Email newsletters, with
											support for regular email clients using (
											<strong>ZURB</strong>) framework. */}
											{parse(t.raw("list")[3].responsibilities.tnt4_ru[8])}
										</li>
										<li>
											{/* Communication with team members and a head of web
											department through instant messengers and offline
											meetings. */}
											{t.raw("list")[3].responsibilities.tnt4_ru[9]}
										</li>
									</ul>
								</dd>
							</dl>
						</div>
					</Accordion.Collapse>
				</div>
			</Accordion.Item>
			{/* GAZPROM MEDIA END */}

			{/* URRAA & FRESHBROCCOLI START */}
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
									year: 2016,
									month: 10,
									day: 24,
									timezoneOffset: 60 * 3,
								})}
							>
								{/* October 2016 */}
								{t.raw("list")[4].from}
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
								{/* October 2017 */}
								{t.raw("list")[4].to}
							</time>
							)
						</span>
						<span className={styles.experience__duration}>
							{/* 1 year */}
							{t.raw("list")[4].duration}
						</span>
						<span className={styles.experience__position}>
							{/* Frontend developer */}
							{t.raw("list")[4].position}
						</span>
						<span className={styles.experience__where}>
							<Image
								className={styles["experience__where-icon"]}
								src={uurraa}
								width={20}
								alt="UURRAA logo"
							/>
							<Image
								className={styles["experience__where-icon"]}
								src={freshbroccoli}
								width={20}
								alt="Freshbroccoli logo"
							/>
							{/* UURRAA & Freshbroccoli - Moscow, Russia 🇷🇺 */}
							{t.raw("list")[4].company} - {t.raw("list")[4].where}
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
							<div>
								<a
									href="https://web.archive.org/web/20170709032816/https://urraa.ru/"
									target="_blank"
									rel="noopener noreferrer"
									style={{
										display: "inline-flex",
										alignItems: "center",
									}}
								>
									<span className="print-invisible">urraa.ru</span>
									<span className="print-inline-visible">
										https://web.archive.org/web/20170709032816/https://urraa.ru/
									</span>
									<FaExternalLinkAlt
										style={{
											fontSize: "0.75em",
											marginInlineStart: "0.3333em",
										}}
									/>
								</a>
							</div>
							<p>{t.raw("list")[4].paragraph}</p>
							<ol
								style={{
									listStylePosition: "inside",
									paddingInline: 0,
								}}
							>
								<li>
									<a
										href="https://web.archive.org/web/20170709032816/https://urraa.ru/"
										target="_blank"
										rel="noopener noreferrer"
										style={{
											display: "inline-flex",
											alignItems: "center",
										}}
									>
										<span className="print-invisible">urraa.ru</span>
										<span className="print-inline-visible">
											https://web.archive.org/web/20170709032816/https://urraa.ru/
										</span>{" "}
										<FaExternalLinkAlt
											style={{
												fontSize: "0.75em",
												marginInlineStart: "0.3333em",
											}}
										/>
									</a>{" "}
									- {t.raw("list")[4].projects.urraa}
								</li>
								<li>
									<a
										href="https://web.archive.org/web/20170603211147/https://freshbroccoli.ru/"
										target="_blank"
										rel="noopener noreferrer"
										style={{
											display: "inline-flex",
											alignItems: "center",
										}}
									>
										<span className="print-invisible">freshbroccoli.ru</span>
										<span className="print-inline-visible">
											https://web.archive.org/web/20170603211147/https://freshbroccoli.ru/
										</span>{" "}
										<FaExternalLinkAlt
											style={{
												fontSize: "0.75em",
												marginInlineStart: "0.3333em",
											}}
										/>
									</a>{" "}
									- {t.raw("list")[4].projects.freshbroccoli}
								</li>
								<li>
									<a
										href="https://new.freshbroccoli.ru"
										target="_blank"
										rel="noopener noreferrer"
										style={{
											display: "inline-flex",
											alignItems: "center",
										}}
									>
										<span className="print-invisible">
											new.freshbroccoli.ru
										</span>
										<span className="print-inline-visible">
											https://new.freshbroccoli.ru
										</span>{" "}
										<FaExternalLinkAlt
											style={{
												fontSize: "0.75em",
												marginInlineStart: "0.3333em",
											}}
										/>
									</a>{" "}
									- {t.raw("list")[4].projects.new_freshbroccoli}
								</li>
							</ol>
							<h4>{t.raw("list")[4].responsibilities.title}</h4>
							<blockquote
								style={{
									fontWeight: 300,
									marginInline: 0,
									paddingInlineStart: "1rem",
									borderInlineStart: "0.125rem solid #c0c0c0",
								}}
							>
								{parse(t.raw("list")[4].responsibilities.blockquote)}
							</blockquote>
							<dl
								style={{
									paddingInlineStart: 0,
									marginBlockEnd: 0,
								}}
							>
								{/* URRAA & FRESHBROCCOLI */}
								<dt>
									<a
										href="https://web.archive.org/web/20170709032816/https://urraa.ru/"
										target="_blank"
										rel="noopener noreferrer"
										style={{
											display: "inline-flex",
											alignItems: "center",
											color: "inherit",
										}}
									>
										urraa.ru{" "}
										<FaExternalLinkAlt
											style={{
												fontSize: "0.75em",
												marginInlineStart: "0.3333em",
											}}
										/>
									</a>
								</dt>
								<dt>
									<a
										href="https://freshbroccoli.ru/"
										target="_blank"
										rel="noopener noreferrer"
										style={{
											display: "inline-flex",
											alignItems: "center",
											color: "inherit",
										}}
									>
										freshbroccoli.ru{" "}
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
									<ul className="cv">
										<li>
											{parse(
												t.raw("list")[4].responsibilities[
													"urraa-and-freshbroccoli"
												][0],
											)}
										</li>
										<li>
											{parse(
												t.raw("list")[4].responsibilities[
													"urraa-and-freshbroccoli"
												][1],
											)}
										</li>
										<li>
											{parse(
												t.raw("list")[4].responsibilities[
													"urraa-and-freshbroccoli"
												][2],
											)}
										</li>
										<li>
											{parse(
												t.raw("list")[4].responsibilities[
													"urraa-and-freshbroccoli"
												][3],
											)}
										</li>
										<li>
											{parse(
												t.raw("list")[4].responsibilities[
													"urraa-and-freshbroccoli"
												][4],
											)}
										</li>
										<li>
											{parse(
												t.raw("list")[4].responsibilities[
													"urraa-and-freshbroccoli"
												][5],
											)}
										</li>
										<li>
											{parse(
												t.raw("list")[4].responsibilities[
													"urraa-and-freshbroccoli"
												][6],
											)}
										</li>
										<li>
											{parse(
												t.raw("list")[4].responsibilities[
													"urraa-and-freshbroccoli"
												][7],
											)}
										</li>
										<li>
											{parse(
												t.raw("list")[4].responsibilities[
													"urraa-and-freshbroccoli"
												][8],
											)}
										</li>
									</ul>
								</dd>
								{/* /URRAA & FRESHBROCCOLI */}

								{/* NEW.FRESHBROCCOLI */}
								<dt>
									<a
										href="https://new.freshbroccoli.ru/"
										target="_blank"
										rel="noopener noreferrer"
										style={{
											display: "inline-flex",
											alignItems: "center",
											color: "inherit",
										}}
									>
										new.freshbroccoli.ru{" "}
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
									<ul className="cv">
										<li>
											{parse(
												t.raw("list")[4].responsibilities.new_freshbroccoli[0],
											)}
										</li>
										<li>
											{parse(
												t.raw("list")[4].responsibilities.new_freshbroccoli[1],
											)}
										</li>
										<li>
											{parse(
												t.raw("list")[4].responsibilities.new_freshbroccoli[2],
											)}
										</li>
										<li>
											{parse(
												t.raw("list")[4].responsibilities.new_freshbroccoli[3],
											)}
										</li>
										<li>
											{parse(
												t.raw("list")[4].responsibilities.new_freshbroccoli[4],
											)}
										</li>
										<li>
											{parse(
												t.raw("list")[4].responsibilities.new_freshbroccoli[5],
											)}
										</li>
										<li>
											{parse(
												t.raw("list")[4].responsibilities.new_freshbroccoli[6],
											)}
										</li>
										<li>
											{t.raw("list")[4].responsibilities.new_freshbroccoli[7]}
										</li>
									</ul>
								</dd>
							</dl>
							{/* /NEW.FRESHBROCCOLI */}
						</div>
					</Accordion.Collapse>
				</div>
			</Accordion.Item>
			{/* URRAA & FRESHBROCCOLI END */}

			{/* MAGORA SYSTEMS START */}
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
						<span className={styles.experience__duration}>7 months</span>
						<span className={styles.experience__position}>
							Frontend developer
						</span>
						<span className={styles.experience__where}>
							<Image
								className={clsx(
									styles["experience__where-icon"],
									styles["experience__where-icon--magorasystems"],
								)}
								src={magorasystems}
								height={20}
								alt="Magora-Systems logo"
							/>
							Magora Systems - Novosibirsk, Russia 🇷🇺
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
							<div>
								<a
									href="https://magora-systems.com/"
									target="_blank"
									rel="noopener noreferrer"
									style={{
										display: "inline-flex",
										alignItems: "center",
									}}
								>
									<span className="print-invisible">magora-systems.com</span>
									<span className="print-inline-visible">
										https://magora-systems.com/
									</span>
									<FaExternalLinkAlt
										style={{
											fontSize: "0.75em",
											marginInlineStart: "0.3333em",
										}}
									/>
								</a>
							</div>
							<p>Worked on the following projects:</p>
							<ol
								style={{
									listStylePosition: "inside",
									paddingInline: 0,
								}}
							>
								<li>
									<a
										href="#"
										target="_blank"
										rel="noopener noreferrer"
										style={{
											display: "inline-flex",
											alignItems: "center",
										}}
									>
										<span className="print-invisible">Elite Taxi Platform</span>
										<span className="print-inline-visible">
											Elite Taxi Platform (London)
										</span>{" "}
										<FaExternalLinkAlt
											style={{
												fontSize: "0.75em",
												marginInlineStart: "0.3333em",
											}}
										/>
									</a>{" "}
									- Web platform for an elite taxi service in London, targeting
									Arab clients.
								</li>
								<li>
									<a
										href="#"
										target="_blank"
										rel="noopener noreferrer"
										style={{
											display: "inline-flex",
											alignItems: "center",
										}}
									>
										<span className="print-invisible">
											Dating Social Network
										</span>
										<span className="print-inline-visible">
											Dating Social Network (India)
										</span>{" "}
										<FaExternalLinkAlt
											style={{
												fontSize: "0.75em",
												marginInlineStart: "0.3333em",
											}}
										/>
									</a>{" "}
									- Web platform for an Indian dating social network similar to
									Badoo.
								</li>
								<li>
									<a
										href="#"
										target="_blank"
										rel="noopener noreferrer"
										style={{
											display: "inline-flex",
											alignItems: "center",
										}}
									>
										<span className="print-invisible">Music Platform</span>
										<span className="print-inline-visible">
											Music Platform (SoundCloud-like)
										</span>{" "}
										<FaExternalLinkAlt
											style={{
												fontSize: "0.75em",
												marginInlineStart: "0.3333em",
											}}
										/>
									</a>{" "}
									- Web-based music platform similar to SoundCloud.
								</li>
							</ol>
							<h4>Responsibilities:</h4>
							<dl
								style={{
									paddingInlineStart: 0,
									marginBlockEnd: 0,
								}}
							>
								{/* Elite Taxi Platform */}
								<dt>
									<a
										href="#"
										target="_blank"
										rel="noopener noreferrer"
										style={{
											display: "inline-flex",
											alignItems: "center",
											color: "inherit",
										}}
									>
										Elite Taxi Platform{" "}
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
									<ul className="cv">
										<li>
											Created layouts using (<strong>JavaScript</strong>{" "}
											<code style={{ fontSize: "0.75em" }}>ES5</code>,{" "}
											<strong>jQuery</strong>, <strong>HTML5</strong>,{" "}
											<strong>CSS3</strong>, <strong>Bootstrap</strong>{" "}
											<code style={{ fontSize: "0.75em" }}>v3</code>
											).
										</li>
										<li>
											Integrated and customized the (<strong>Highcharts</strong>
											) library for building financial and other reporting
											sections, including line and share charts.
										</li>
										<li>
											Ensured cross-browser compatibility, including support for
											(<strong>Internet Explorer</strong>{" "}
											<code style={{ fontSize: "0.75em" }}>v10+</code>
											).
										</li>
										<li>
											Delivered pixel-perfect layouts in accordance with design
											requirements.
										</li>
										<li>
											Used (<strong>Git</strong>) for version control and
											collaboration.
										</li>
										<li>
											Prepared and submitted reports using (
											<strong>Redmine</strong>) for task tracking and project
											management.
										</li>
										<li>
											Collaborated with backend developers working on the (
											<strong>.NET</strong>) framework to ensure seamless
											integration between frontend and backend.
										</li>
									</ul>
								</dd>
								{/* Dating Social Network */}
								<dt>
									<a
										href="#"
										target="_blank"
										rel="noopener noreferrer"
										style={{
											display: "inline-flex",
											alignItems: "center",
											color: "inherit",
										}}
									>
										Dating Social Network{" "}
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
									<ul className="cv">
										<li>
											Created layouts using (<strong>JavaScript</strong>{" "}
											<code style={{ fontSize: "0.75em" }}>ES5</code>,{" "}
											<strong>jQuery</strong>, <strong>HTML5</strong>,{" "}
											<strong>CSS3</strong>, <strong>FlatUI</strong>).
										</li>
										<li>
											Ensured cross-browser compatibility, including support for
											(<strong>Internet Explorer</strong>{" "}
											<code style={{ fontSize: "0.75em" }}>v10+</code>
											).
										</li>
										<li>
											Delivered pixel-perfect layouts in accordance with design
											requirements.
										</li>
										<li>
											Used (<strong>Git</strong>) for version control and
											collaboration.
										</li>
										<li>
											Prepared and submitted reports using (
											<strong>Redmine</strong>) for task tracking and project
											management.
										</li>
										<li>
											The project was in the early stages of development and did
											not yet have a backend. It was running on a frontend build
											tool, likely (<strong>Gulp.js</strong>) or (
											<strong>Grunt.js</strong>), with live-reload functionality
											for automatic page refresh during development.
										</li>
									</ul>
								</dd>
								{/* Music Platform */}
								<dt>
									<a
										href="#"
										target="_blank"
										rel="noopener noreferrer"
										style={{
											display: "inline-flex",
											alignItems: "center",
											color: "inherit",
										}}
									>
										Music Platform{" "}
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
									<ul className="cv">
										<li>
											Created layouts using (<strong>JavaScript</strong>{" "}
											<code style={{ fontSize: "0.75em" }}>ES5</code>,{" "}
											<strong>jQuery</strong>, <strong>HTML5</strong>,{" "}
											<strong>CSS3</strong>, <strong>Bootstrap</strong>{" "}
											<code style={{ fontSize: "0.75em" }}>v3</code>
											).
										</li>
										<li>
											Designed and implemented email newsletters for the
											platform.
										</li>
										<li>
											Ensured cross-browser compatibility, including support for
											(<strong>Internet Explorer</strong>{" "}
											<code style={{ fontSize: "0.75em" }}>v10+</code>
											).
										</li>
										<li>
											Delivered pixel-perfect layouts in accordance with design
											requirements.
										</li>
										<li>
											Used (<strong>Git</strong>) for version control and
											collaboration.
										</li>
										<li>
											Prepared and submitted reports using (
											<strong>Redmine</strong>) for task tracking and project
											management.
										</li>
										<li>
											Collaborated with backend developers working on the (
											<strong>.NET</strong>) framework to ensure seamless
											integration between frontend and backend.
										</li>
									</ul>
								</dd>
							</dl>
						</div>
					</Accordion.Collapse>
				</div>
			</Accordion.Item>
			{/* MAGORA SYSTEMS END */}

			{/* BTI PRO START */}
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
						<span className={styles.experience__duration}>6 months</span>
						<span className={styles.experience__position}>
							Frontend developer
						</span>
						<span className={styles.experience__where}>
							<Image
								className={styles["experience__where-icon"]}
								src={btipro}
								height={20}
								alt="BTI Pro logo"
							/>
							BTI Pro - Novosibirsk, Russia 🇷🇺
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
							<div>
								<a
									href="https://web.archive.org/web/20140510091338/http://btipro.ru/"
									target="_blank"
									rel="noopener noreferrer"
									style={{
										display: "inline-flex",
										alignItems: "center",
									}}
								>
									<span className="print-invisible">btipro.ru</span>
									<span className="print-inline-visible">
										https://web.archive.org/web/20140510091338/http://btipro.ru/
									</span>
									<FaExternalLinkAlt
										style={{
											fontSize: "0.75em",
											marginInlineStart: "0.3333em",
										}}
									/>
								</a>
							</div>
							<p>Worked on the following projects:</p>
							<ol
								style={{
									listStylePosition: "inside",
									paddingInline: 0,
								}}
							>
								<li>
									<a
										href="https://web.archive.org/web/20141023134413/http://ktotam.pro/"
										target="_blank"
										rel="noopener noreferrer"
										style={{
											display: "inline-flex",
											alignItems: "center",
										}}
									>
										<span className="print-invisible">ktotam.pro</span>
										<span className="print-inline-visible">
											https://web.archive.org/web/20141023134413/http://ktotam.pro/
										</span>{" "}
										<FaExternalLinkAlt
											style={{
												fontSize: "0.75em",
												marginInlineStart: "0.3333em",
											}}
										/>
									</a>{" "}
									- Real estate startup project aimed at simplifying access to
									property information.
									<ul>
										<li>
											The project aimed to simplify access to property
											information by allowing users to enter a cadastral number
											or address and receive free basic information or detailed
											data for a small fee.
										</li>
										<li>
											Solved the problem of complex and confusing forms on
											official government websites by providing a user-friendly
											interface.
										</li>
									</ul>
								</li>
							</ol>
							<h4>Responsibilities:</h4>
							<dl
								style={{
									paddingInlineStart: 0,
									marginBlockEnd: 0,
								}}
							>
								{/* KTO-TAM.PRO */}
								<dt>
									<a
										href="https://web.archive.org/web/20141023134413/http://ktotam.pro/"
										target="_blank"
										rel="noopener noreferrer"
										style={{
											display: "inline-flex",
											alignItems: "center",
											color: "inherit",
										}}
									>
										ktotam.pro{" "}
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
									<ul className="cv">
										<li>
											Developed the website from scratch using pixel-perfect
											methodology.
										</li>
										<li>
											Implemented front-end programming using (
											<strong>JavaScript</strong>{" "}
											<code style={{ fontSize: "0.75em" }}>ES5</code>
											).
										</li>
										<li>
											Added JavaScript logic to handle events using native (
											<strong>XMLHttpRequest</strong>) for making HTTP requests.
										</li>
										<li>
											Created layouts and animations using (
											<strong>HTML</strong>, <strong>CSS</strong>).
										</li>
										<li>
											Used (<strong>Git</strong>) for version control and
											collaboration.
										</li>
										<li>
											Worked with tools such as (<strong>Avocode</strong>), (
											<strong>Sublime Editor</strong>), and (
											<strong>Git Tortoise</strong>).
										</li>
										<li>
											Collaborated with a small team consisting of a full-stack
											developer, a designer, and a Scrum manager.
										</li>
										<li>
											Participated in Scrum meetings with tasks visualized on a
											whiteboard.
										</li>
									</ul>
								</dd>
							</dl>
						</div>
					</Accordion.Collapse>
				</div>
			</Accordion.Item>
			{/* BTI PRO END */}

			{/* OMEGA DESIGN START */}
			<Accordion.Item
				eventKey="8"
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
						<span className={styles.experience__duration}>10 months</span>
						<span className={styles.experience__position}>HTML developer</span>
						<span className={styles.experience__where}>
							<Image
								className={styles["experience__where-icon"]}
								src={omegadesignpro}
								height={20}
								alt="Omega Design Pro logo"
							/>
							Omega Design - Krasnoyarsk, Russia 🇷🇺
						</span>
					</Accordion.Button>
				</h3>
				<div className={accordionStyles.accordion__wrapper}>
					<Accordion.Collapse
						eventKey="8"
						bsPrefix="_"
						className={accordionStyles.accordion__collapse}
					>
						<div className={accordionStyles.accordion__body}>
							<div>
								<a
									href="https://www.omegadesign.pro/"
									target="_blank"
									rel="noopener noreferrer"
									style={{
										display: "inline-flex",
										alignItems: "center",
									}}
								>
									<span className="print-invisible">omegadesign.pro</span>
									<span className="print-inline-visible">
										https://www.omegadesign.pro/
									</span>
									<FaExternalLinkAlt
										style={{
											fontSize: "0.75em",
											marginInlineStart: "0.3333em",
										}}
									/>
								</a>
							</div>
							<p>Worked on the following projects:</p>
							<ol
								style={{
									listStylePosition: "inside",
									paddingInline: 0,
								}}
							>
								<li>
									<a
										href="https://web.archive.org/web/20180409060127/http://%D0%BD%D0%B8%D0%BA%D0%B0%D0%BB%D1%8E%D0%BA%D1%81.%D1%80%D1%84/"
										target="_blank"
										rel="noopener noreferrer"
										style={{
											display: "inline-flex",
											alignItems: "center",
										}}
									>
										<span className="print-invisible">никалюкс.рф</span>
										<span className="print-inline-visible">
											https://web.archive.org/web/20180409060127/http://%D0%BD%D0%B8%D0%BA%D0%B0%D0%BB%D1%8E%D0%BA%D1%81.%D1%80%D1%84/
										</span>{" "}
										<FaExternalLinkAlt
											style={{
												fontSize: "0.75em",
												marginInlineStart: "0.3333em",
											}}
										/>
									</a>{" "}
									- Online store for children&apos;s products.
								</li>
								<li>
									<a
										href="#"
										target="_blank"
										rel="noopener noreferrer"
										style={{
											display: "inline-flex",
											alignItems: "center",
										}}
									>
										<span className="print-invisible">
											heat.omegadesign.pro
										</span>
										<span className="print-inline-visible">
											http://heat.omegadesign.pro/
										</span>{" "}
										<FaExternalLinkAlt
											style={{
												fontSize: "0.75em",
												marginInlineStart: "0.3333em",
											}}
										/>
									</a>{" "}
									- Project related to heating systems.
								</li>
								<li>
									<a
										href="https://web.archive.org/web/20140707080406/http://aurum-tours.ru/"
										target="_blank"
										rel="noopener noreferrer"
										style={{
											display: "inline-flex",
											alignItems: "center",
										}}
									>
										<span className="print-invisible">aurum-tours.ru</span>
										<span className="print-inline-visible">
											https://web.archive.org/web/20140707080406/http://aurum-tours.ru/
										</span>{" "}
										<FaExternalLinkAlt
											style={{
												fontSize: "0.75em",
												marginInlineStart: "0.3333em",
											}}
										/>
									</a>{" "}
									- Website for a travel agency.
								</li>
								<li>
									<a
										href="https://web.archive.org/web/20150407021801/http://www.eco-d.ru/"
										target="_blank"
										rel="noopener noreferrer"
										style={{
											display: "inline-flex",
											alignItems: "center",
										}}
									>
										<span className="print-invisible">http://eco-d.ru/</span>
										<span className="print-inline-visible">
											https://web.archive.org/web/20150407021801/http://www.eco-d.ru/
										</span>{" "}
										<FaExternalLinkAlt
											style={{
												fontSize: "0.75em",
												marginInlineStart: "0.3333em",
											}}
										/>
									</a>{" "}
									- Website for an eco-friendly products company.
								</li>
								<li>
									<a
										href="https://web.archive.org/web/20140517065703/http://capitel24.ru/"
										target="_blank"
										rel="noopener noreferrer"
										style={{
											display: "inline-flex",
											alignItems: "center",
										}}
									>
										<span className="print-invisible">
											http://capitel24.ru/
										</span>
										<span className="print-inline-visible">
											https://web.archive.org/web/20140517065703/http://capitel24.ru/
										</span>{" "}
										<FaExternalLinkAlt
											style={{
												fontSize: "0.75em",
												marginInlineStart: "0.3333em",
											}}
										/>
									</a>{" "}
									- Website for a construction company.
								</li>
							</ol>
							<h4>Responsibilities:</h4>
							<dl
								style={{
									paddingInlineStart: 0,
									marginBlockEnd: 0,
								}}
							>
								{/* Omega Design */}
								<dt>
									<a
										href="https://www.omegadesign.pro/"
										target="_blank"
										rel="noopener noreferrer"
										style={{
											display: "inline-flex",
											alignItems: "center",
											color: "inherit",
										}}
									>
										Omega Design{" "}
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
									<ul className="cv">
										<li>
											Developed HTML layouts from the scratch, as well as
											improve and support projects with legacy code.
										</li>
										<li>
											Created and maintained layouts for multi-page applications{" "}
											<abbr title="Multi-Page Application">MPA</abbr> using (
											<strong>HTML4</strong>, <strong>CSS2</strong>,{" "}
											<strong>jQuery</strong>, <strong>Photoshop</strong>{" "}
											<code style={{ fontSize: "0.75em" }}>v5</code>
											).
										</li>
										<li>
											Worked with CMS platforms such as (
											<strong>WordPress</strong>), (<strong>Joomla</strong>),
											and (<strong>Drupal</strong>).
										</li>
										<li>
											Interacted with the backend part of websites written in (
											<strong>PHP</strong>) using the (<strong>Yii</strong>)
											framework.
										</li>
										<li>
											Used (<strong>Redmine</strong>) for task tracking and
											project management.
										</li>
									</ul>
								</dd>
							</dl>
						</div>
					</Accordion.Collapse>
				</div>
			</Accordion.Item>
			{/* OMEGA DESIGN END */}

			{/* ALFATEAM START */}
			<Accordion.Item
				eventKey="9"
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
						<span className={styles.experience__duration}>9 months</span>
						<span className={styles.experience__position}>HTML developer</span>
						<span className={styles.experience__where}>
							<Image
								className={styles["experience__where-icon"]}
								src={alfateam}
								height={16}
								alt="Alfateam logo"
							/>
							Alfateam - Krasnoyarsk, Russia 🇷🇺
						</span>
					</Accordion.Button>
				</h3>
				<div className={accordionStyles.accordion__wrapper}>
					<Accordion.Collapse
						eventKey="9"
						bsPrefix="_"
						className={accordionStyles.accordion__collapse}
					>
						<div className={accordionStyles.accordion__body}>
							<div>
								<a
									href="https://alfateam.ru/"
									target="_blank"
									rel="noopener noreferrer"
									style={{
										display: "inline-flex",
										alignItems: "center",
									}}
								>
									<span className="print-invisible">alfateam.ru</span>
									<span className="print-inline-visible">
										https://alfateam.ru/
									</span>
									<FaExternalLinkAlt
										style={{
											fontSize: "0.75em",
											marginInlineStart: "0.3333em",
										}}
									/>
								</a>
							</div>
							<p>Worked on the following projects:</p>
							<ol
								style={{
									listStylePosition: "inside",
									paddingInline: 0,
								}}
							>
								<li>
									<a
										href="http://besm.alfateam.ru/"
										target="_blank"
										rel="noopener noreferrer"
										style={{
											display: "inline-flex",
											alignItems: "center",
										}}
									>
										<span className="print-invisible">@+dress</span>
										<span className="print-inline-visible">
											http://besm.alfateam.ru/
										</span>{" "}
										<FaExternalLinkAlt
											style={{
												fontSize: "0.75em",
												marginInlineStart: "0.3333em",
											}}
										/>
									</a>{" "}
									- Online store for fashionable clothing, shoes, and
									accessories (Bitrix). My first serious project and the first
									online store I developed.
								</li>
								<li>
									<a
										href="https://proffcom24.ru/"
										target="_blank"
										rel="noopener noreferrer"
										style={{
											display: "inline-flex",
											alignItems: "center",
										}}
									>
										<span className="print-invisible">proffcom24.ru</span>
										<span className="print-inline-visible">
											https://proffcom24.ru/
										</span>{" "}
										<FaExternalLinkAlt
											style={{
												fontSize: "0.75em",
												marginInlineStart: "0.3333em",
											}}
										/>
									</a>{" "}
									- Online store of furniture and office accessories (Bitrix).
								</li>
								<li>
									<a
										href="https://web-arhive.ru/page?url=http%3A%2F%2Fm2m-sib.ru%2F&date=20141228&hidden=0"
										target="_blank"
										rel="noopener noreferrer"
										style={{
											display: "inline-flex",
											alignItems: "center",
										}}
									>
										<span className="print-invisible">m2m-sib.ru</span>
										<span className="print-inline-visible">
											https://web-arhive.ru/page?url=http%3A%2F%2Fm2m-sib.ru%2F&date=20141228&hidden=0
										</span>{" "}
										<FaExternalLinkAlt
											style={{
												fontSize: "0.75em",
												marginInlineStart: "0.3333em",
											}}
										/>
									</a>{" "}
									- M2M-Telematics Siberia LLC is a multi-platform
									representative of the GLONASS market leaders and a licensed
									workshop for the installation and repair of tachographs.
									(Bitrix).
								</li>
								<li>
									<a
										href="https://web.archive.org/web/20140911111454/http://www.regtime24.ru/"
										target="_blank"
										rel="noopener noreferrer"
										style={{
											display: "inline-flex",
											alignItems: "center",
										}}
									>
										<span className="print-invisible">regtime24.ru</span>
										<span className="print-inline-visible">
											https://web.archive.org/web/20140911111454/http://www.regtime24.ru/
										</span>{" "}
										<FaExternalLinkAlt
											style={{
												fontSize: "0.75em",
												marginInlineStart: "0.3333em",
											}}
										/>
									</a>{" "}
									- Online store for fashionable clothing, shoes, and
									accessories (Bitrix).
								</li>
								<li>
									<a
										href="#"
										target="_blank"
										rel="noopener noreferrer"
										style={{
											display: "inline-flex",
											alignItems: "center",
										}}
									>
										<span className="print-invisible">
											Mercury - Siberian Fuel Company
										</span>
										<span className="print-inline-visible">
											Mercury - Siberian Fuel Company (Bitrix)
										</span>{" "}
										<FaExternalLinkAlt
											style={{
												fontSize: "0.75em",
												marginInlineStart: "0.3333em",
											}}
										/>
									</a>{" "}
									- Website for Mercury - Siberian Fuel Company (Bitrix).
								</li>
								<li>
									<a
										href="https://web.archive.org/web/20151117114253/http://wandmart.ru/"
										target="_blank"
										rel="noopener noreferrer"
										style={{
											display: "inline-flex",
											alignItems: "center",
										}}
									>
										<span className="print-invisible">wandmart.ru</span>
										<span className="print-inline-visible">
											https://web.archive.org/web/20151117114253/http://wandmart.ru/
										</span>{" "}
										<FaExternalLinkAlt
											style={{
												fontSize: "0.75em",
												marginInlineStart: "0.3333em",
											}}
										/>
									</a>{" "}
									- Online store for fashionable clothing, shoes, and
									accessories (Bitrix).
								</li>
							</ol>
							<h4>Responsibilities:</h4>
							<dl
								style={{
									paddingInlineStart: 0,
									marginBlockEnd: 0,
								}}
							>
								{/* Alfateam */}
								<dt>
									<a
										href="https://alfateam.ru/"
										target="_blank"
										rel="noopener noreferrer"
										style={{
											display: "inline-flex",
											alignItems: "center",
											color: "inherit",
										}}
									>
										Alfateam{" "}
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
									<ul className="cv">
										<li>
											Created layouts and maintained websites on the (
											<strong>Bitrix</strong>) platform, using (
											<strong>HTML4</strong>, <strong>CSS2</strong>,{" "}
											<strong>Photoshop</strong>{" "}
											<code style={{ fontSize: "0.75em" }}>v5</code>
											).
										</li>
										<li>
											Followed the (<strong>Pixel-Perfect</strong>) methodology
											to ensure the layout fully matched the provided designs.
										</li>
										<li>
											Ensured сross-browser compatibility, including (
											<strong>Internet Explorer</strong>{" "}
											<code style={{ fontSize: "0.75em" }}>v8-10</code>
											).
										</li>
										<li>
											Collaborated closely with the designer, backend developer,
											and company director to ensure smooth project execution
											and alignment with business goals.
										</li>
									</ul>
								</dd>
							</dl>
						</div>
					</Accordion.Collapse>
				</div>
			</Accordion.Item>
			{/* ALFATEAM END */}
		</Accordion>
	);
}

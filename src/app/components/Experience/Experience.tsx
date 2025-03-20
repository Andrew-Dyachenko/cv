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

/* <Experience icons> */
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
/* </Experience icons> */

import { useTranslations } from "next-intl";
import parse from "html-react-parser";

// import Link from "next/link";
// import { DateTime } from "luxon";

const font = Sofia_Sans({
	weight: ["300", "400", "500"],
	subsets: ["latin", "cyrillic"],
});

export default function Experience() {
	const t = useTranslations("experience");
	return (
		<Accordion
			defaultActiveKey={["1"]}
			alwaysOpen
			className={accordionStyles.accordion}
		>
			{/* B2BROKER START */}
			<Accordion.Item
				eventKey="1"
				bsPrefix="_"
				className={accordionStyles.accordion__item}
			>
				<div className={accordionStyles["accordion__item-padding"]}>
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
									className="cv/2"
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
				</div>
			</Accordion.Item>
			{/* B2BROKER END */}

			{/* INDIVIDUAL ENTREPRENEUR START */}
			<Accordion.Item
				eventKey="2"
				bsPrefix="_"
				className={accordionStyles.accordion__item}
			>
				<div className={accordionStyles["accordion__item-padding"]}>
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
								<p style={{ marginBlockStart: 0 }}>
									{parse(t.raw("list")[1].paragraph)}
								</p>
								<h4>{t.raw("list")[1].responsibilities.title}</h4>
								<p style={{ marginBlockEnd: 0 }}>{parse(t.raw("list")[1].responsibilities.all[0])}</p>
							</div>
						</Accordion.Collapse>
					</div>
				</div>
			</Accordion.Item>
			{/* /INDIVIDUAL ENTREPRENEUR END */}

			{/* LLC ITSOLUTIONS START */}
			<Accordion.Item
				eventKey="3"
				bsPrefix="_"
				className={accordionStyles.accordion__item}
			>
				<div className={accordionStyles["accordion__item-padding"]}>
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
									className="cv/2"
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
										- {t.raw("list")[2].projects.zfx_com}
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
										- {t.raw("list")[2].projects.my_zfx_com}
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
												{parse(t.raw("list")[2].responsibilities.zfx_com[9])}
											</li>
											<li>
												{parse(t.raw("list")[2].responsibilities.zfx_com[10])}
											</li>
											<li>
												{parse(t.raw("list")[2].responsibilities.zfx_com[11])}
											</li>
											<li>
												{parse(t.raw("list")[2].responsibilities.zfx_com[12])}
											</li>
											<li>
												{parse(t.raw("list")[2].responsibilities.zfx_com[13])}
											</li>
											<li>
												{parse(t.raw("list")[2].responsibilities.zfx_com[14])}
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
												{parse(t.raw("list")[2].responsibilities.my_zfx_com[0])}
											</li>
											<li>
												{parse(t.raw("list")[2].responsibilities.my_zfx_com[1])}
											</li>
											<li>
												{parse(t.raw("list")[2].responsibilities.my_zfx_com[2])}
											</li>
											<li>
												{parse(t.raw("list")[2].responsibilities.my_zfx_com[3])}
											</li>
											<li>
												{parse(t.raw("list")[2].responsibilities.my_zfx_com[4])}
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
				</div>
			</Accordion.Item>
			{/* /LLC ITSOLUTIONS END */}

			{/* GAZPROM MEDIA START */}
			<Accordion.Item
				eventKey="4"
				bsPrefix="_"
				className={accordionStyles.accordion__item}
			>
				<div className={accordionStyles["accordion__item-padding"]}>
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
									className="cv/2"
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
										- {t.raw("list")[3].projects.dip_tnt4_ru}
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
												{parse(
													t.raw("list")[3].responsibilities.dip_tnt4_ru[0],
												)}
											</li>
											<li>
												{parse(
													t.raw("list")[3].responsibilities.dip_tnt4_ru[1],
												)}
											</li>
											<li>
												{parse(
													t.raw("list")[3].responsibilities.dip_tnt4_ru[2],
												)}
											</li>
											<li>
												{t.raw("list")[3].responsibilities.dip_tnt4_ru[3]}
											</li>
											<li>
												{parse(
													t.raw("list")[3].responsibilities.dip_tnt4_ru[4],
												)}
											</li>
											<li>
												{parse(
													t.raw("list")[3].responsibilities.dip_tnt4_ru[5],
												)}
											</li>
											<li>
												{parse(
													t.raw("list")[3].responsibilities.dip_tnt4_ru[6],
												)}
											</li>
											<li>
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
												{parse(t.raw("list")[3].responsibilities.subbota_tv[0])}
											</li>
											<li>
												{parse(t.raw("list")[3].responsibilities.subbota_tv[1])}
											</li>
											<li>
												{parse(t.raw("list")[3].responsibilities.subbota_tv[2])}
											</li>
											<li>
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
															t.raw("list")[3].responsibilities
																.subbota_tv[4][0],
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
															t.raw("list")[3].responsibilities
																.subbota_tv[4][1],
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
												{parse(
													t.raw("list")[3].responsibilities.subbota_tv[5][1],
												)}
											</li>
											<li>
												{parse(t.raw("list")[3].responsibilities.subbota_tv[6])}
											</li>
											<li>
												{parse(t.raw("list")[3].responsibilities.subbota_tv[7])}
											</li>
											<li>
												{parse(t.raw("list")[3].responsibilities.subbota_tv[8])}
											</li>
											<li>
												{parse(t.raw("list")[3].responsibilities.subbota_tv[9])}
											</li>
											<li>
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
												{parse(t.raw("list")[3].responsibilities.tnt4_ru[0])}
											</li>
											<li>
												{parse(t.raw("list")[3].responsibilities.tnt4_ru[1])}
											</li>
											<li>
												{parse(t.raw("list")[3].responsibilities.tnt4_ru[2])}
											</li>
											<li>
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
												{parse(t.raw("list")[3].responsibilities.tnt4_ru[5])}
											</li>
											<li>
												{parse(t.raw("list")[3].responsibilities.tnt4_ru[6])}
											</li>
											<li>
												{parse(t.raw("list")[3].responsibilities.tnt4_ru[7])}
											</li>
											<li>
												{parse(t.raw("list")[3].responsibilities.tnt4_ru[8])}
											</li>
											<li>{t.raw("list")[3].responsibilities.tnt4_ru[9]}</li>
										</ul>
									</dd>
								</dl>
							</div>
						</Accordion.Collapse>
					</div>
				</div>
			</Accordion.Item>
			{/* /GAZPROM MEDIA END */}

			{/* URRAA & FRESHBROCCOLI START */}
			<Accordion.Item
				eventKey="5"
				bsPrefix="_"
				className={accordionStyles.accordion__item}
			>
				<div className={accordionStyles["accordion__item-padding"]}>
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
									className="cv/2"
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
													t.raw("list")[4].responsibilities
														.new_freshbroccoli[0],
												)}
											</li>
											<li>
												{parse(
													t.raw("list")[4].responsibilities
														.new_freshbroccoli[1],
												)}
											</li>
											<li>
												{parse(
													t.raw("list")[4].responsibilities
														.new_freshbroccoli[2],
												)}
											</li>
											<li>
												{parse(
													t.raw("list")[4].responsibilities
														.new_freshbroccoli[3],
												)}
											</li>
											<li>
												{parse(
													t.raw("list")[4].responsibilities
														.new_freshbroccoli[4],
												)}
											</li>
											<li>
												{parse(
													t.raw("list")[4].responsibilities
														.new_freshbroccoli[5],
												)}
											</li>
											<li>
												{parse(
													t.raw("list")[4].responsibilities
														.new_freshbroccoli[6],
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
				</div>
			</Accordion.Item>
			{/* /URRAA & FRESHBROCCOLI END */}

			{/* MAGORA SYSTEMS START */}
			<Accordion.Item
				eventKey="6"
				bsPrefix="_"
				className={accordionStyles.accordion__item}
			>
				<div className={accordionStyles["accordion__item-padding"]}>
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
									{t.raw("list")[5].from}
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
									{t.raw("list")[5].to}
								</time>
								)
							</span>
							<span className={styles.experience__duration}>7 months</span>
							<span className={styles.experience__position}>
								{t.raw("list")[5].position}
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
								{t.raw("list")[5].company} - {t.raw("list")[5].where}
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
								<p>{t.raw("list")[6].paragraph}</p>
								<ol
									className="cv/2"
									style={{
										listStylePosition: "inside",
										paddingInline: 0,
									}}
								>
									<li>
										<a
											// biome-ignore lint/a11y/useValidAnchor: <explanation>
											href="#"
											aria-disabled="true"
											target="_blank"
											rel="noopener noreferrer"
											style={{
												display: "inline-flex",
												alignItems: "center",
											}}
										>
											<span className="print-invisible">
												Elite Taxi Platform
											</span>
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
										- {t.raw("list")[5].projects.taxi_app}
									</li>
									<li>
										<a
											// biome-ignore lint/a11y/useValidAnchor: <explanation>
											href="#"
											aria-disabled="true"
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
										- {t.raw("list")[5].projects.dating_app}
									</li>
									<li>
										<a
											href="#"
											aria-disabled="true"
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
										- {t.raw("list")[5].projects.music_app}
									</li>
								</ol>
								<h4>{t.raw("list")[5].responsibilities.title}</h4>
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
											aria-disabled="true"
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
												{parse(t.raw("list")[5].responsibilities.taxi_app[0])}
											</li>
											<li>
												{parse(t.raw("list")[5].responsibilities.taxi_app[1])}
											</li>
											<li>
												{parse(t.raw("list")[5].responsibilities.taxi_app[2])}
											</li>
											<li>{t.raw("list")[5].responsibilities.taxi_app[3]}</li>
											<li>
												{parse(t.raw("list")[5].responsibilities.taxi_app[4])}
											</li>
											<li>
												{parse(t.raw("list")[5].responsibilities.taxi_app[5])}
											</li>
											<li>
												{parse(t.raw("list")[5].responsibilities.taxi_app[6])}
											</li>
										</ul>
									</dd>
									{/* Dating Social Network */}
									<dt>
										<a
											// biome-ignore lint/a11y/useValidAnchor: <explanation>
											href="#"
											aria-disabled="true"
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
												{parse(t.raw("list")[5].responsibilities.dating_app[0])}
											</li>
											<li>
												{parse(t.raw("list")[5].responsibilities.dating_app[1])}
											</li>
											<li>{t.raw("list")[5].responsibilities.dating_app[2]}</li>
											<li>
												{parse(t.raw("list")[5].responsibilities.dating_app[3])}
											</li>
											<li>
												{parse(t.raw("list")[5].responsibilities.dating_app[4])}
											</li>
											<li>
												{parse(t.raw("list")[5].responsibilities.dating_app[5])}
											</li>
										</ul>
									</dd>
									{/* Music Platform */}
									<dt>
										<a
											href="#"
											aria-disabled="true"
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
												{parse(t.raw("list")[5].responsibilities.music_app[0])}
											</li>
											<li>{t.raw("list")[5].responsibilities.music_app[1]}</li>
											<li>
												{parse(t.raw("list")[5].responsibilities.music_app[2])}.
											</li>
											<li>{t.raw("list")[5].responsibilities.music_app[3]}</li>
											<li>
												{parse(t.raw("list")[5].responsibilities.music_app[4])}
											</li>
											<li>
												{parse(t.raw("list")[5].responsibilities.music_app[5])}
											</li>
											<li>
												{parse(t.raw("list")[5].responsibilities.music_app[6])}
											</li>
										</ul>
									</dd>
								</dl>
							</div>
						</Accordion.Collapse>
					</div>
				</div>
			</Accordion.Item>
			{/* /MAGORA SYSTEMS END */}

			{/* BTI PRO START */}
			<Accordion.Item
				eventKey="7"
				bsPrefix="_"
				className={accordionStyles.accordion__item}
			>
				<div className={accordionStyles["accordion__item-padding"]}>
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
									{t.raw("list")[6].from}
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
									{t.raw("list")[6].to}
								</time>
								)
							</span>
							<span className={styles.experience__duration}>
								{t.raw("list")[6].duration}
							</span>
							<span className={styles.experience__position}>
								{t.raw("list")[6].position}
							</span>
							<span className={styles.experience__where}>
								<Image
									className={styles["experience__where-icon"]}
									src={btipro}
									height={20}
									alt="BTI Pro logo"
								/>
								{t.raw("list")[6].company} - {t.raw("list")[6].where}
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
								<p>{t.raw("list")[6].paragraph}</p>
								<ol
									className="cv/2"
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
										- {t.raw("list")[6].projects.ktotam.title}
										<dl>
											<ul
												className="cv"
												style={{ listStylePosition: "outside" }}
											>
												<li>
													{t.raw("list")[6].projects.ktotam.description[0]}
												</li>
												<li>
													{t.raw("list")[6].projects.ktotam.description[1]}
												</li>
											</ul>
										</dl>
									</li>
								</ol>
								<h4>{t.raw("list")[6].responsibilities.title}</h4>
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
											<li>{t.raw("list")[6].responsibilities.ktotam[0]}</li>
											<li>
												{parse(t.raw("list")[6].responsibilities.ktotam[1])}
											</li>
											<li>
												{parse(t.raw("list")[6].responsibilities.ktotam[2])}
											</li>
											<li>
												{parse(t.raw("list")[6].responsibilities.ktotam[3])}
											</li>
											<li>
												{parse(t.raw("list")[6].responsibilities.ktotam[4])}
											</li>
											<li>
												{parse(t.raw("list")[6].responsibilities.ktotam[5])}
											</li>
											<li>{t.raw("list")[6].responsibilities.ktotam[6]}</li>
											<li>{t.raw("list")[6].responsibilities.ktotam[7]}</li>
										</ul>
									</dd>
								</dl>
							</div>
						</Accordion.Collapse>
					</div>
				</div>
			</Accordion.Item>
			{/* /BTI PRO END */}

			{/* OMEGA DESIGN START */}
			<Accordion.Item
				eventKey="8"
				bsPrefix="_"
				className={accordionStyles.accordion__item}
			>
				<div className={accordionStyles["accordion__item-padding"]}>
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
									{t.raw("list")[7].from}
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
									{t.raw("list")[7].to}
								</time>
								)
							</span>
							<span className={styles.experience__duration}>
								{t.raw("list")[7].duration}
							</span>
							<span className={styles.experience__position}>
								{t.raw("list")[7].position}
							</span>
							<span className={styles.experience__where}>
								<Image
									className={styles["experience__where-icon"]}
									src={omegadesignpro}
									height={20}
									alt="Omega Design Pro logo"
								/>
								{t.raw("list")[7].company} - {t.raw("list")[7].where}
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
								<p>{t.raw("list")[7].paragraph}</p>
								<ol
									className="cv/2"
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
										- {t.raw("list")[7].projects.nikalux}
									</li>
									<li>
										<a
											href="#"
											aria-disabled="true"
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
										- {t.raw("list")[7].projects.heat_pro}
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
										- {t.raw("list")[7].projects["aurum-tours"]}
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
										- {t.raw("list")[7].projects["eco-design"]}
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
										- {t.raw("list")[7].projects.capitel24}
									</li>
								</ol>
								<h4>{t.raw("list")[7].responsibilities.title}</h4>
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
											<li>{t.raw("list")[7].responsibilities.all[0]}</li>
											<li>{parse(t.raw("list")[7].responsibilities.all[1])}</li>
											<li>{parse(t.raw("list")[7].responsibilities.all[2])}</li>
											<li>{parse(t.raw("list")[7].responsibilities.all[3])}</li>
											<li>{parse(t.raw("list")[7].responsibilities.all[4])}</li>
										</ul>
									</dd>
								</dl>
							</div>
						</Accordion.Collapse>
					</div>
				</div>
			</Accordion.Item>
			{/* /OMEGA DESIGN END */}

			{/* ALFATEAM START */}
			<Accordion.Item
				eventKey="9"
				bsPrefix="_"
				className={accordionStyles.accordion__item}
			>
				<div className={accordionStyles["accordion__item-padding"]}>
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
									{t.raw("list")[8].from}
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
									{t.raw("list")[8].to}
								</time>
								)
							</span>
							<span className={styles.experience__duration}>
								{t.raw("list")[8].duration}
							</span>
							<span className={styles.experience__position}>
								{t.raw("list")[8].position}
							</span>
							<span className={styles.experience__where}>
								<Image
									className={styles["experience__where-icon"]}
									src={alfateam}
									height={16}
									alt="Alfateam logo"
								/>
								{t.raw("list")[8].company} - {t.raw("list")[8].where}
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
								<p>{t.raw("list")[8].paragraph}</p>
								<ol
									className="cv/2"
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
										- {t.raw("list")[8].projects["@+dress"]}
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
										- {t.raw("list")[8].projects.proffcom24}
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
										- {t.raw("list")[8].projects["m2m-sib"]}
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
										- {t.raw("list")[8].projects.regtime24}
									</li>
									<li>
										<a
											href="#"
											aria-disabled="true"
											target="_blank"
											rel="noopener noreferrer"
											style={{
												display: "inline-flex",
												alignItems: "center",
											}}
										>
											<span className="print-invisible">
												{t.raw("list")[8].projects.mercury.title}
											</span>
											<span className="print-inline-visible">
												{t.raw("list")[8].projects.mercury.title}
											</span>{" "}
											<FaExternalLinkAlt
												style={{
													fontSize: "0.75em",
													marginInlineStart: "0.3333em",
												}}
											/>
										</a>{" "}
										- {t.raw("list")[8].projects.mercury.description}
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
										- {t.raw("list")[8].projects.wandmart}
									</li>
								</ol>
								<h4>{t.raw("list")[8].responsibilities.title}</h4>
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
											<li>{parse(t.raw("list")[8].responsibilities.all[0])}</li>
											<li>{parse(t.raw("list")[8].responsibilities.all[1])}</li>
											<li>{parse(t.raw("list")[8].responsibilities.all[2])}</li>
											<li>{parse(t.raw("list")[8].responsibilities.all[3])}</li>
										</ul>
									</dd>
								</dl>
							</div>
						</Accordion.Collapse>
					</div>
				</div>
			</Accordion.Item>
			{/* /ALFATEAM END */}
		</Accordion>
	);
}

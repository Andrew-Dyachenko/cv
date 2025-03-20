import { FaTelegramPlane, FaGithub } from "react-icons/fa";
import {
	MdAlternateEmail,
	MdOutlineConnectWithoutContact,
} from "react-icons/md";
import { CiLinkedin } from "react-icons/ci";
import { IoPhonePortraitOutline, IoLocationOutline } from "react-icons/io5";
import { BsAirplane } from "react-icons/bs";
import styles from "./contacts.module.scss";
import clsx from "clsx";
import { useTranslations } from "next-intl";
import parse, { domToReact, DOMNode } from "html-react-parser";

export default function Contacts() {
	const t = useTranslations("contacts");
	const RelocationOptions = {
		replace: (node: DOMNode) => {
			if (
				node.type === "tag" &&
				node.name === "span" &&
				node.attribs.class === "relocation"
			) {
				return (
					<span className={styles["contacts__item-relocation"]}>
						{domToReact(node.children as DOMNode[], RelocationOptions)}
					</span>
				);
			}
		},
	};

	return (
		<address className={styles.contacts}>
			<div className={styles.contacts__title}>
				<MdOutlineConnectWithoutContact
					className={styles["contacts__title-icon"]}
				/>{" "}
				{t("title")}
			</div>
			<ul className={styles.contacts__list}>
				<li
					className={clsx(
						styles.contacts__item,
						styles["contacts__item--phone"]
					)}
				>
					<a
						href="tel:+79152519666"
						className={styles.contacts__link}
					>
						<IoPhonePortraitOutline
							className={styles["contacts__item-icon"]}
						/>
						<div className={styles["contacts__item-text"]}>
							+7 (915) 251-96-66
						</div>
					</a>
				</li>
				<li
					className={clsx(
						styles.contacts__item,
						styles["contacts__item--email"]
					)}
				>
					<a
						href="mailto:north.inhale@gmail.com"
						className={styles.contacts__link}
					>
						<MdAlternateEmail
							className={styles["contacts__item-icon"]}
						/>
						<div className={styles["contacts__item-text"]}>
							north.inhale@gmail.com
						</div>
					</a>
				</li>
				<li
					className={clsx(
						styles.contacts__item,
						styles["contacts__item--telegram"]
					)}
				>
					<a
						href="https://t.me/pandamaximus"
						target="_blank"
						rel="noopener noreferrer"
						className={styles.contacts__link}
					>
						<FaTelegramPlane
							className={styles["contacts__item-icon"]}
						/>
						<div className={styles["contacts__item-text"]}>
							<span className="print-inline-visible">
								https://t.me/pandamaximus
							</span>
							<span className="print-invisible">Telegram</span>
						</div>
					</a>
				</li>
				<li
					className={clsx(
						styles.contacts__item,
						styles["contacts__item--linkdin"]
					)}
				>
					<a
						href="https://www.linkedin.com/in/andrey-dyachenko/"
						target="_blank"
						rel="noopener noreferrer"
						className={styles.contacts__link}
					>
						<CiLinkedin className={styles["contacts__item-icon"]} />
						<div className={styles["contacts__item-text"]}>
							<span className="print-inline-visible">
								https://www.linkedin.com/in/andrey-dyachenko/
							</span>
							<span className="print-invisible">LinkdIn</span>
						</div>
					</a>
				</li>
				<li
					className={clsx(
						styles.contacts__item,
						styles["contacts__item--github"]
					)}
				>
					<a
						href="https://github.com/Andrew-Dyachenko"
						target="_blank"
						rel="noopener noreferrer"
						className={styles.contacts__link}
					>
						<FaGithub className={styles["contacts__item-icon"]} />
						<div className={styles["contacts__item-text"]}>
							<span className="print-inline-visible">
								https://github.com/Andrew-Dyachenko
							</span>
							<span className="print-invisible">GitHub</span>
						</div>
					</a>
				</li>
				<li
					className={clsx(
						styles.contacts__item,
						styles["contacts__item--location"]
					)}
				>
					<IoLocationOutline
						className={styles["contacts__item-icon"]}
					/>
					<div className={styles["contacts__item-text"]}>
						{t("location")}
					</div>
				</li>
				<li
					className={clsx(
						styles.contacts__item,
						styles["contacts__item--relocation"]
					)}
				>
					<BsAirplane className={styles["contacts__item-icon"]} />
					<div className={styles["contacts__item-text"]}>
						{parse(t.raw("relocation"), {
							replace: (node: any) => {
								if (
									node.name === "span" &&
									node.attribs.class === "relocation"
								) {
									return (
										<span
											className={
												styles[
													"contacts__item-relocation"
												]
											}
										>
											{domToReact(node.children, RelocationOptions)}
										</span>
									);
								}
							},
						})}
					</div>
				</li>
			</ul>
		</address>
	);
}

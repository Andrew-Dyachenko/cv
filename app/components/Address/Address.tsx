import { FaTelegramPlane, FaGithub } from "react-icons/fa";
import {
	MdAlternateEmail,
	MdOutlineConnectWithoutContact,
} from "react-icons/md";
import { CiLinkedin } from "react-icons/ci";
import { IoPhonePortraitOutline, IoLocationOutline } from "react-icons/io5";
import styles from "./address.module.scss";
import clsx from "clsx";

export default function Address() {
	return (
		<address className={styles.address}>
			<div className={styles.address__title}>
				<MdOutlineConnectWithoutContact
					className={styles["address__title-icon"]}
				/>{" "}
				Contacts
			</div>
			<ul className={styles.address__list}>
				<li
					className={clsx(styles.address__item, styles["address__item--phone"])}
				>
					<a href="tel:+995597746863" className={styles.address__link}>
						<IoPhonePortraitOutline className={styles["address__item-icon"]} />{" "}
						+995 597 746 863
					</a>
				</li>
				<li
					className={clsx(styles.address__item, styles["address__item--email"])}
				>
					<a
						href="mailto:north.inhale@gmail.com"
						className={styles.address__link}
					>
						<MdAlternateEmail className={styles["address__item-icon"]} />{" "}
						north.inhale@gmail.com
					</a>
				</li>
				<li
					className={clsx(
						styles.address__item,
						styles["address__item--telegram"],
					)}
				>
					<a
						href="https://t.me/pandamaximus"
						target="_blank"
						rel="noopener noreferrer"
						className={styles.address__link}
					>
						<FaTelegramPlane className={styles["address__item-icon"]} />{" "}
						<span className="print-inline-visible">
							https://t.me/pandamaximus
						</span>
						<span className="print-invisible">Telegram</span>
					</a>
				</li>
				<li
					className={clsx(
						styles.address__item,
						styles["address__item--linkdin"],
					)}
				>
					<a
						href="https://www.linkedin.com/in/andrey-dyachenko/"
						target="_blank"
						rel="noopener noreferrer"
						className={styles.address__link}
					>
						<CiLinkedin className={styles["address__item-icon"]} />{" "}
						<span className="print-inline-visible">
							https://www.linkedin.com/in/andrey-dyachenko/
						</span>
						<span className="print-invisible">LinkdIn</span>
					</a>
				</li>
				<li
					className={clsx(
						styles.address__item,
						styles["address__item--github"],
					)}
				>
					<a
						href="https://github.com/Andrew-Dyachenko"
						target="_blank"
						rel="noopener noreferrer"
						className={styles.address__link}
					>
						<FaGithub className={styles["address__item-icon"]} />{" "}
						<span className="print-inline-visible">
							https://github.com/Andrew-Dyachenko
						</span>
						<span className="print-invisible">GitHub</span>
					</a>
				</li>
				<li
					className={clsx(
						styles.address__item,
						styles["address__item--location"],
					)}
				>
					<IoLocationOutline className={styles["address__item-icon"]} /> Batumi,
					Georgia 🇬🇪
				</li>
			</ul>
		</address>
	);
}

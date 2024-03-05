import Image from "next/image";
import styles from "./Aside.module.scss";
import profile from "../../../public/profile.jpg";
import { FaRegUser, FaTelegramPlane } from "react-icons/fa";
import { IoLocationOutline } from "react-icons/io5";
import {
	MdAlternateEmail,
	MdOutlineConnectWithoutContact,
} from "react-icons/md";
// import Accordion from "@/components/Experience";
import {
	IoExtensionPuzzleOutline,
	IoLanguage,
	IoPhonePortraitOutline,
} from "react-icons/io5";
import Tags from "@/components/Tags";
import clsx from "clsx";

export default function Aside() {
	return (
		<aside className={styles.aside}>
			<figure className={styles.aside__figure}>
				<Image
					className={styles.aside__image}
					src={profile}
					placeholder="blur"
					width={275}
					height={275}
					alt="Picture of the author"
				/>
				<figcaption className={styles.aside__figcaption}>
					<FaRegUser className={styles["aside__figcaption-icon"]} /> Andrey
					Dyachenko
				</figcaption>
			</figure>
			<h3 className={styles.occupation}>
				<span className={styles.occupation__head}>Frontend developer</span>{" "}
				<span className={styles.occupation__level}>
					<abbr
						className={styles.occupation__abbr}
						title="A Middle Frontend developer typically has experience and stack covering: 1. Layout (HTML, CSS); 2. JavaScript and frameworks; 3. Working with RESTful API; 4. State management; 5. Adaptive and responsive layout; 6. Testing; 7. Performance optimization; 8. Versioning and assembly; 9. Communication and cooperation; 10. Continuous training;"
					>
						(middle / middle+)
					</abbr>
				</span>
			</h3>
			<section className={clsx(styles.stack, styles.aside__stack)}>
				<h3 className={styles.stack__title}>
					<IoExtensionPuzzleOutline className={styles.stack__icon} /> Stack
				</h3>
				<Tags
					list={[
						"HTML",
						"CSS",
						"JavaScript (ES5-11)",
						"React",
						"Redux",
						"Next.js",
						"TypeScript",
						"SVG",
						"Canvas",
						"REST",
						"WebSocket",
						"GIT",
						"W3C",
						"A11Y",
						"NPM",
						"Node.js",
						"jQuery",
						"SASS",
						"Bootstrap",
						"BEM",
						"PUG",
						"Jest",
						"Enzyme",
						"Vue",
						"Parcel",
						"Gulp",
						"Grunt",
						"Webpack",
						"Liquid",
						"Emails",
						"ZURB-Emails",
						"Figma",
						"Zeplin",
						"Photoshop",
					]}
					count={7}
					stylesheet={styles}
					className="stack"
				/>
			</section>
			<section className={styles.languages}>
				<h3 className={styles.languages__title}>
					<IoLanguage className={styles.languages__icon} /> Languages
				</h3>
				<ul className={styles.languages__list}>
					<li className={styles.languages__item}>
						English - <dfn>B2</dfn>{" "}
						<small className={styles.languages__decoding}>
							{" "}
							(upper-intermediate)
						</small>
					</li>
					<li className={styles.languages__item}>
						Russian - <dfn>С2</dfn>{" "}
						<small className={styles.languages__decoding}> (native)</small>
					</li>
				</ul>
			</section>
			<address className={styles.address}>
				<h3 className={styles.address__title}>
					<MdOutlineConnectWithoutContact
						className={styles["address__title-icon"]}
					/>{" "}
					Contacts
				</h3>
				<ul className={styles.address__list}>
					<li
						className={clsx(
							styles.address__item,
							styles["address__item--phone"],
						)}
					>
						<a href="tel:+995597746863" className={styles.address__link}>
							<IoPhonePortraitOutline
								className={styles["address__item-icon"]}
							/>{" "}
							+995 597 746 863
						</a>
					</li>
					<li
						className={clsx(
							styles.address__item,
							styles["address__item--email"],
						)}
					>
						<a href="mailto:north.inhale@gmail.com" className={styles.address__link}>
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
							Telegram
						</a>
					</li>
					<li
						className={clsx(
							styles.address__item,
							styles["address__item--location"],
						)}
					>
						<IoLocationOutline className={styles["address__item-icon"]} />{" "}
						Batumi, Georgia 🇬🇪
					</li>
				</ul>
			</address>
		</aside>
	);
}

import Image from "next/image";
import styles from "./Aside.module.scss";
import profile from "../../../public/profile.jpg";
import { FaRegUser } from "react-icons/fa";
// import Accordion from "@/components/Experience";
import { IoExtensionPuzzleOutline, IoLanguage } from "react-icons/io5";
import Tags from "@/components/Tags";

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
			<h3 className={styles.aside__occupation}>
				<span className={styles["aside__occupation-head"]}>
					Frontend developer
				</span>{" "}
				<span className={styles["aside__occupation-level"]}>
					<abbr className={styles["aside__occupation-abbr"]} title="A Middle Frontend developer typically has experience and skills covering: 1. Layout (HTML, CSS); 2. JavaScript and frameworks; 3. Working with RESTful API; 4. State management; 5. Adaptive and responsive layout; 6. Testing; 7.Performance optimization; 8.Versioning and assembly; 9.Communication and cooperation; 10. Continuous training;">
						(middle/middle+)
					</abbr>
				</span>
			</h3>
			<section className={styles.stack}>
				<h3 className={styles.stack__title}>
					<IoExtensionPuzzleOutline className={styles.stack__icon} /> Skills
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
					className={styles}
				/>
			</section>
			<section className={styles.languages}>
				<h3 className={styles.languages__title}>
					<IoLanguage className={styles.languages__icon} /> Languages
				</h3>
				<ul className={styles.languages__list}>
					<li className={styles.languages__item}>
						English -{" "}
						<span>
							B2 <dfn>(upper-intermediate)</dfn>
						</span>
					</li>
					<li className={styles.languages__item}>
						Russian -{" "}
						<span>
							С2 <dfn>(native)</dfn>
						</span>
					</li>
				</ul>
			</section>
		</aside>
	);
}

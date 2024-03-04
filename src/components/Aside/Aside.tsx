import Image from "next/image";
import styles from "./Aside.module.scss";
import profile from "../../../public/profile.jpg";
import { FaRegUser } from "react-icons/fa";
// import Accordion from "@/components/Experience";
import { IoExtensionPuzzleOutline } from "react-icons/io5";
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
				<abbr
					className={styles["aside__occupation-abbr"]}
					title="A specialist who develops the user interface (UI) of web applications. A frontend developer is responsible for how users interact with a website or web application by organizing and displaying content, managing visual presentation, and ensuring usability."
				>
					Frontend developer
				</abbr>{" "}
				<small className={styles["aside__occupation-level"]}>
					(middle/middle+)
				</small>
			</h3>
			<div className={styles.stack}>
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
			</div>
		</aside>
	);
}

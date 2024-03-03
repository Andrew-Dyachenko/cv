import Image from "next/image";
import styles from "./aside.module.scss";
import profile from "../../../../public/profile.jpg";
import { FaRegUser } from "react-icons/fa";
import Accordion from "@/components/Accordion";

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
					<FaRegUser className={styles["aside__figcaption-icon"]} /> Andrey Dyachenko
				</figcaption>
			</figure>
			<h3 className={styles.aside__occupation}>
				<abbr
					className={styles["aside__occupation-abbr"]}
					title="A specialist who develops the user interface (UI) of web applications. A frontend developer is responsible for how users interact with a website or web application by organizing and displaying content, managing visual presentation, and ensuring usability."
				>
					Frontend developer
				</abbr>{" "}
				<small className={styles["aside__occupation-level"]}>(senior)</small>
			</h3>
			<div className={styles.aside__stack}>
				<h3 className={styles["aside__stack-title"]}>
					Stack
				</h3>
				<ul>
					<li>HTML</li>
					<li>CSS</li>
					<li>JavaScript (ES5+)</li>
					<li>React</li>
					<li>Next.js</li>

				</ul>
			</div>
		</aside>
	);
}

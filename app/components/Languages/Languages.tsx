import { IoLanguage } from "react-icons/io5";
import styles from "./languages.module.scss";

export default function Languages() {
	return (
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
	);
}

import styles from "./Main.module.scss";
import Experience from "@/components/Experience";
import { AiTwotoneExperiment } from "react-icons/ai";
import { BsCalculator } from "react-icons/bs";

export default function Main() {
	return (
		<main className={styles.main}>
			<section className={styles.section}>
				<h2 className={styles.section__title}>
					<BsCalculator className={styles["section__title-icon"]} /> Summary
				</h2>
				<hr />
				<div className={styles.section__body}>
					Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magni,
					fugiat.
				</div>
			</section>
			<section className={styles.section}>
				<h2 className={styles.section__title}>
					<AiTwotoneExperiment className={styles["section__title-icon"]} /> Work
					experience
				</h2>
				<hr />
				<div className={styles.section__body}>
					<Experience />
				</div>
			</section>
		</main>
	);
}

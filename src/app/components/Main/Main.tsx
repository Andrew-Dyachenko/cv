import styles from "./main.module.scss";
import Experience from "../Experience";
import { AiTwotoneExperiment } from "react-icons/ai";
import { BsCalculator } from "react-icons/bs";
import { useTranslations } from "next-intl";
import parse from "html-react-parser";

export default function Main() {
	const tSummary = useTranslations("summary");
	const tExperience = useTranslations("experience");
	return (
		<main className={styles.main}>
			<section className={styles.section}>
				<h2 className={styles.section__title}>
					<BsCalculator className={styles["section__title-icon"]} />{" "}
					{tSummary("title")}
				</h2>
				<hr className={styles.section__hr} />
				<div className={styles.section__body}>
					{parse(tSummary.raw("content")[0])}
					<ul>
						<li>{parse(tSummary.raw("content")[1][0])}</li>
						<li>{parse(tSummary.raw("content")[1][1])}</li>
						<li>{parse(tSummary.raw("content")[1][2])}</li>
						<li>{parse(tSummary.raw("content")[1][3])}</li>
						<li>{parse(tSummary.raw("content")[1][4])}</li>
					</ul>
					{parse(tSummary.raw("content")[2])}
				</div>
			</section>

			<section className={styles.section}>
				<h2 className={styles.section__title}>
					<AiTwotoneExperiment
						className={styles["section__title-icon"]}
					/>{" "}
					<span className={styles["section__title-text"]}>
						{tExperience("title")}
					</span>
					<span className={styles["section__title-duration"]}>
						{tExperience("duration")}
					</span>
				</h2>
				<hr className={styles.section__hr} />
				<div className={styles.section__body}>
					<Experience />
				</div>
			</section>
		</main>
	);
}

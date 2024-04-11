import styles from "./main.module.scss";
import Experience from "../Experience";
import { AiTwotoneExperiment } from "react-icons/ai";
import { BsCalculator } from "react-icons/bs";

export default function Main() {
	return (
		<main className={styles.main}>
			<section className={styles.section}>
				<h2 className={styles.section__title}>
					<BsCalculator className={styles["section__title-icon"]} /> Summary
				</h2>
				<hr className={styles.section__hr} />
				<div className={styles.section__body}>
					Specializes in the development of web applications, including:{" "}
					<ul>
						<li>
							<span>
								Single-Page Applications <dfn>(SPA)</dfn>
							</span>
						</li>
						<li>
							<span>
								Multi-Page Applications <dfn>(MPA)</dfn>
							</span>
						</li>
						<li>
							<span>
								Progressive Web Applications <dfn>(PWA)</dfn>
							</span>
						</li>
						<li>Landing Pages</li>
						<li>NPM Packages</li>
						<li>Emails</li>
					</ul>
					Has the ability to create adaptive, responsive, accessible, valid,
					stable, cross-browser, pixel-perfect, user interfaces.
				</div>
			</section>
			<section className={styles.section}>
				<h2 className={styles.section__title}>
					<AiTwotoneExperiment className={styles["section__title-icon"]} /> Work
					experience
				</h2>
				<hr className={styles.section__hr} />
				<div className={styles.section__body}>
					<Experience />
				</div>
			</section>
		</main>
	);
}

import styles from "./main.module.scss";
import Experience from "../Experience";
import { AiTwotoneExperiment } from "react-icons/ai";
import { BsCalculator } from "react-icons/bs";

export default function Main() {
	return (
		<main className={styles.main}>
			<section className={styles.section}>
				<h2 className={styles.section__title}>
					<BsCalculator className={styles["section__title-icon"]} />{" "}
					Summary
				</h2>
				<hr className={styles.section__hr} />
				<div className={styles.section__body}>
					<p>
						Experienced in developing modern web applications,
						including:
					</p>
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
						<li>
							<abbr title="Node Package Manager">NPM</abbr>{" "}
							Packages
						</li>
						<li>Emails (transactional & marketing)</li>
					</ul>
					<p>
						Frontend developer specializing in building modern web
						applications, including SPAs, PWAs, and email templates.
						Proficient in (<strong>HTML</strong>,{" "}
						<strong>CSS</strong>, <strong>JavaScript</strong>), with
						experience in (<strong>React</strong>,{" "}
						<strong>TypeScript</strong>). Skilled in creating
						pixel-perfect, cross-browser compatible layouts and
						developing reusable email templates compatible with
						major clients like (<strong>Outlook</strong>,{" "}
						<strong>Gmail</strong>, <strong>Yahoo</strong>).
					</p>
					<p>
						Experienced in (<strong>Agile</strong>,{" "}
						<strong>Scrum</strong>) workflows, code reviews, and
						delivering scalable solutions for clients in finance,
						e-commerce, and media industries.
					</p>
				</div>
			</section>

			<section className={styles.section}>
				<h2 className={styles.section__title}>
					<AiTwotoneExperiment
						className={styles["section__title-icon"]}
					/>{" "}
					<span className={styles["section__title-text"]}>
						Work experience
					</span>
					<span className={styles["section__title-duration"]}>
						<span className="visually-hidden">
							Total work experience in all companies
						</span>
						8 years 5 months
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

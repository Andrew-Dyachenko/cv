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
					<p>
						Experienced in developing modern web applications, including:
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
							<abbr title="Node Package Manager">NPM</abbr> Packages
						</li>
						<li>Emails (transactional & marketing)</li>
					</ul>
					<p>
						Proficient in building adaptive, responsive, accessible, valid, and
						cross-browser user interfaces using modern frontend technologies such as{" "}
						(<strong>React, Next.js, Vue, Angular</strong>). Skilled in working with{" "}
						<strong>design systems</strong>, component libraries (<strong>Storybook</strong>), and
						ensuring compatibility across all major email clients, including (<strong>Outlook</strong> <code style={{ fontSize: "0.75em" }}>^2007</code>).
						Experienced in collaborative development, working closely with designers,
						developers, and content teams to deliver high-quality UI solutions.
					</p>
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

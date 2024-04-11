import styles from "./education.module.scss";
import { IoSchoolOutline } from "react-icons/io5";
import getFormattedDateTime from "../../utils/getFormattedDateTime";
import { PiCertificate } from "react-icons/pi";

export default function Education() {
	return (
		<section className={styles.education}>
			<h3 className={styles.education__title}>
				{" "}
				<IoSchoolOutline className={styles["education__title-icon"]} />
				Education
			</h3>
			<ul className={styles.education__list}>
				<li className={styles.education__item}>
					<h4 className={styles.education__where}>
						Krasnoyarsk Assembly College
					</h4>
					<div className={styles.education__faculty}>Welding technologies (Bachelor)</div>
					<div className={styles.education__degree}>
						<PiCertificate className={styles.education__certificate} />
						Technician
					</div>
					<div className={styles.education__when}>
						(
						<time
							dateTime={getFormattedDateTime({
								year: 2007,
								month: 9,
								day: 1,
								timezoneOffset: 60 * 7,
							})}
						>
							2007
						</time>{" "}
						-{" "}
						<time
							dateTime={getFormattedDateTime({
								year: 2010,
								month: 6,
								day: 25,
								timezoneOffset: 60 * 7,
							})}
						>
							2010
						</time>
						)
					</div>
				</li>
				<li className={styles.education__item}>
					<h4 className={styles.education__where}>
						Siberian State Aerospace University{" "}
						<small>(Nonprofit Partnership Graduate School of Business)</small>
					</h4>
					<div className={styles.education__faculty}>Programming basics - (Bachelor)</div>
					<div className={styles.education__degree}>
						<PiCertificate className={styles.education__certificate} />
						Programmer
					</div>
					<div className={styles.education__when}>
						(
						<time
							dateTime={getFormattedDateTime({
								year: 2004,
								month: 9,
								day: 1,
								timezoneOffset: 60 * 7,
							})}
						>
							2004
						</time>{" "}
						-{" "}
						<time
							dateTime={getFormattedDateTime({
								year: 2006,
								month: 4,
								day: 14,
								timezoneOffset: 60 * 7,
							})}
						>
							2006
						</time>
						)
					</div>
				</li>
				<li className={styles.education__item}>
					<h4 className={styles.education__where}>
						Krasnoyarsk secondary school
					</h4>
					<div className={styles.education__degree}>
						<PiCertificate className={styles.education__certificate} /> Certificate
					</div>
					<div className={styles.education__when}>
						(
						<time
							dateTime={getFormattedDateTime({
								year: 2004,
								month: 9,
								day: 1,
								timezoneOffset: 60 * 7,
							})}
						>
							1996
						</time>{" "}
						-{" "}
						<time
							dateTime={getFormattedDateTime({
								year: 2006,
								month: 6,
								day: 1,
								timezoneOffset: 60 * 7,
							})}
						>
							2006
						</time>
						)
					</div>
				</li>
			</ul>
		</section>
	);
}

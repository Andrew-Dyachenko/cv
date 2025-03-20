import styles from "./education.module.scss";
import { IoSchoolOutline } from "react-icons/io5";
import getFormattedDateTime from "../../utils/getFormattedDateTime";
import { PiCertificate } from "react-icons/pi";
import { useTranslations } from "next-intl";
import parse from "html-react-parser";

export default function Education() {
	const t = useTranslations("education");
	return (
		<section className={styles.education}>
			<h3 className={styles.education__title}>
				{" "}
				<IoSchoolOutline
					className={styles["education__title-icon"]}
				/>{" "}
				{t("title")}
			</h3>
			<ul className={styles.education__list}>
				<li className={styles.education__item}>
					<h4 className={styles.education__where}>
						{t.raw("institutions")[0].name}
					</h4>
					<div className={styles.education__faculty}>
						{t.raw("institutions")[0].faculty}
					</div>
					<div className={styles.education__degree}>
						<PiCertificate
							className={styles.education__certificate}
						/>
						{t.raw("institutions")[0].degree}
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
						{parse(t.raw("institutions")[1].name)}
					</h4>
					<div className={styles.education__faculty}>
						{parse(t.raw("institutions")[1].faculty)}
					</div>
					<div className={styles.education__degree}>
						<PiCertificate
							className={styles.education__certificate}
						/>
						{parse(t.raw("institutions")[1].degree)}
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
						{parse(t.raw("institutions")[2].name)}
					</h4>
					<div className={styles.education__degree}>
						<PiCertificate
							className={styles.education__certificate}
						/>{" "}
						{parse(t.raw("institutions")[2].degree)}
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

import styles from "./occupation.module.scss";
import { useTranslations } from "next-intl";
// import RichText from "../RichText";
import parse from "html-react-parser";

export default function Occupation() {
	const t = useTranslations("occupation");
	return (
		<h3 className={styles.occupation}>
			<span className={styles.occupation__title}>{t("position")}</span>{" "}
			<span className={styles.occupation__level}>
				{parse(t.raw("level"))}
			</span>
		</h3>
	);
}

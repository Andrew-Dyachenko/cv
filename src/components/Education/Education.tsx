import styles from "./Education.module.scss";
import { IoSchoolOutline } from "react-icons/io5";

export default function Education() {
	return (
		<section className={styles.education}>
			<h3 className={styles.education__title}>
				{" "}
				<IoSchoolOutline className={styles["education__title-icon"]} />
				Education
			</h3>
		</section>
	);
}

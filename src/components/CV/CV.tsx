import styles from "./CV.module.scss";
import Aside from "../Aside";
import Main from "../Main";

export default function CV() {
	return (
		<div className={styles.cv}>
			<Aside />
			<Main />
		</div>
	);
}

import { default as CVComponent } from "./components/CV";
import styles from "./page.module.scss";
import clsx from "clsx";

export default function CV() {
	return (
		<div className={clsx("container", styles.container)}>
			<CVComponent />
		</div>
	);
}

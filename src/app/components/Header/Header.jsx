import styles from "./header.module.scss";
import clsx from "clsx";
import Link from "next/link";
// import { Html } from "next/document";
import FontSize from "./FontSize";
import packageJSON from "../../../../package.json";

const { version } = packageJSON;

export default function Header() {
	return (
		<header className={styles.header}>
			<div className={clsx("container", styles.header__container)}>
				<Link href="/" className={styles.brand}>
					CV <sub className={styles.brand__version}>v{version}</sub>
				</Link>
				<FontSize />
			</div>
		</header>
	);
}

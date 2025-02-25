import styles from "./header.module.scss";
import clsx from "clsx";
import Link from "next/link";
// import { Html } from "next/document";
import FontSize from "./FontSize";
import packageJSON from "../../../../package.json";
import DirectionToggle from "../DirectionToggle";
import PrintButton from "../PrintButton";
import ColorSchemeSwitcher from "../ColorSchemeSwitcher";

const { version } = packageJSON;

export default function Header() {
	return (
		<header className={styles.header}>
			<div className={clsx("container", styles.header__container)}>
				<Link href="/" className={styles.brand}>
					CV <sub className={styles.brand__version}>{version}</sub>
				</Link>
				{process.env.NODE_ENV === "development" ? (
					<DirectionToggle
						classNameModificator={styles.header__directionToggle}
					/>
				) : null}
				<PrintButton />
				<FontSize />
				<ColorSchemeSwitcher />
			</div>
		</header>
	);
}

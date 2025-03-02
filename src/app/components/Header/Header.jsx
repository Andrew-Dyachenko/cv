import styles from "./header.module.scss";
import clsx from "clsx";
import Link from "next/link";
// import { Html } from "next/document";
import FontSize from "./FontSize";
import packageJSON from "../../../../package.json";
import DirectionToggle from "../DirectionToggle";
import PrintButton from "../PrintButton";
import ColorSchemeSwitcher from "../ColorSchemeSwitcher";
import { useTranslations } from "next-intl";
import LocaleSwitcher from "../LocaleSwitcher";

const { version } = packageJSON;

export default function Header() {
	const t = useTranslations("header");

	return (
		<header className={styles.header}>
			<div className={clsx("container", styles.header__container)}>
				<Link href="/" className={styles.brand}>
					CV <sub className={styles.brand__version}>{version}</sub>
				</Link>
				{process.env.NODE_ENV === "development" ? (
					<DirectionToggle
						classNameModificator={styles.header__directionToggle}
					>
						Toggle Direction
					</DirectionToggle>
				) : null}
				<PrintButton>{t("print")}</PrintButton>
				<FontSize />
				<ColorSchemeSwitcher />
				<LocaleSwitcher />
			</div>
		</header>
	);
}

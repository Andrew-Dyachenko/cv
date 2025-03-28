import Tags from "../Tags";
import { IoExtensionPuzzleOutline } from "react-icons/io5";
import styles from "./stack.module.scss";
import clsx from "clsx";
import { useTranslations } from "next-intl";

export default function Stack({
	classNameModificator,
}: { classNameModificator?: string }) {
	const t = useTranslations("stack");
	return (
		<section className={clsx(styles.stack, classNameModificator)}>
			<h3 className={styles.stack__title}>
				<IoExtensionPuzzleOutline className={styles.stack__icon} />{" "}{t("title")}
			</h3>
			<Tags
				list={[
					"HTML",
					"CSS",
					"JavaScript (5-11)",
					"React",
					"Redux",
					"Next.js",
					"TypeScript",
					"SVG",
					"Canvas",
					"REST",
					"WebSocket",
					"GIT",
					"W3C",
					"A11Y",
					"NPM",
					"Node.js",
					"jQuery",
					"SASS",
					"Bootstrap",
					"BEM",
					"PUG",
					"Jest",
					"Enzyme",
					"Vue",
					"Parcel",
					"Gulp",
					"Grunt",
					"Webpack",
					"Liquid",
					"Emails",
					"ZURB-Emails",
					"Figma",
					"Zeplin",
					"Photoshop",
				]}
				count={7}
				stylesheet={styles}
				className="stack"
				buttonTextOnShow={t("button-text-on-show")}
				buttonTextOnHide={t("button-text-on-hide")}
			/>
		</section>
	);
}

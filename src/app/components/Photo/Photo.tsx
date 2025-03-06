import Image from "next/image";
import profile from "../../../../public/profile.jpg";
import { FaRegUser } from "react-icons/fa";
import styles from "./photo.module.scss";
import { useTranslations } from "next-intl";

export default function Photo() {
	const t = useTranslations("photo");
	return (
		<figure className={styles.photo__figure}>
			<Image
				className={styles.photo__image}
				src={profile}
				placeholder="blur"
				width={275}
				height={275}
				alt="Picture of the author"
			/>
			<figcaption className={styles.photo__figcaption}>
				<FaRegUser className={styles["photo__figcaption-icon"]} />
				{t("first-name")}{" "}{t("last-name")}
			</figcaption>
		</figure>
	);
}

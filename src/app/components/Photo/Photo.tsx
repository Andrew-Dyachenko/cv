import Image from "next/image";
import profile from "../../../../public/profile.jpg";
import { FaRegUser } from "react-icons/fa";
import styles from "./photo.module.scss";

export default function Photo() {
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
				<FaRegUser className={styles["photo__figcaption-icon"]} /> Andrey
				Dyachenko
			</figcaption>
		</figure>
	);
}

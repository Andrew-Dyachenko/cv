import styles from "./aside.module.scss";
import Education from "../Education";
import Photo from "../Photo";
import Occupation from "../Occupation";
import Stack from "../Stack";
import Contacts from "../Contacts";

export default function Aside() {
	return (
		<aside className={styles.aside}>
			<Photo />
			<Occupation />
			<Stack classNameModificator={styles.aside__stack} />
			<Education />
			<Contacts />
		</aside>
	);
}

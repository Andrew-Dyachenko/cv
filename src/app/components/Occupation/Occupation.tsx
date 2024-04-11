import styles from "./occupation.module.scss"

export default function Occupation() {
	return (
		<h3 className={styles.occupation}>
			<span className={styles.occupation__title}>Frontend developer</span>{" "}
			<span className={styles.occupation__level}>
				<abbr
					className={styles.occupation__abbr}
					title="A Middle Frontend developer typically has experience and stack covering: 1. Layout (HTML, CSS); 2. JavaScript and frameworks; 3. Working with RESTful API; 4. State management; 5. Adaptive and responsive layout; 6. Testing; 7. Performance optimization; 8. Versioning and assembly; 9. Communication and cooperation; 10. Continuous training;"
				>
					(middle / middle+)
				</abbr>
			</span>
		</h3>
	);
}

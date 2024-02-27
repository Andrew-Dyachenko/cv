import { Fragment } from "react";
import styles from "./page.module.scss";
import Aside from "@/components/Aside";
import Main from "@/components/Main";

export default function Home() {
	return (
		<div className="container">
			<Aside />
			<Main />
		</div>
	);
}

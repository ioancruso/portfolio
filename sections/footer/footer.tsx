import styles from "./footer.module.scss";

import data from "@/data/about.json";

function Footer() {
	const { name, footer } = data;

	return (
		<>
			<div className={styles.footer}>
				<div>
					{footer} * {name}
				</div>
			</div>
		</>
	);
}

export { Footer };

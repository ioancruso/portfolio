import { Navbar } from "@/components/navbar/navbar";
import { ThemeSwitcher } from "@/components/themeswitcher/themeswitcher";

import styles from "./header.module.scss";

export type theme = "light" | "dark";

export type HeaderProps = {
	theme: theme;
};

async function Header({ theme }: HeaderProps) {
	return (
		<>
			<div className={styles.header}>
				<ThemeSwitcher theme={theme as theme} />
				<Navbar />
			</div>
		</>
	);
}

export { Header };

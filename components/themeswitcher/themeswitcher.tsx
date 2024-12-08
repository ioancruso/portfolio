"use client";

import { useState, useEffect } from "react";

import { motion } from "framer-motion";

import { DarkSvg } from "@/svgs/dark";
import { LightSvg } from "@/svgs/light";

import styles from "./themeswitcher.module.scss";

import type { theme } from "@/types.ts";

export function ThemeSwitcher({ theme }: { theme: theme }) {
	const [TheTheme, setTheTheme] = useState(theme);

	const toggle = () => {
		setTheTheme(TheTheme === "light" ? "dark" : "light");
	};

	useEffect(() => {
		document.cookie = `theme=${TheTheme};path=/;`;
		const htmlElement = document.querySelector("html");
		if (htmlElement) {
			htmlElement.setAttribute("data-theme", TheTheme);
		}
	}, [TheTheme]);

	return (
		<>
			<div className={styles.wrapper}>
				<div
					className={styles.switch}
					data-ison={TheTheme}
					onClick={toggle}
				>
					{TheTheme === "light" && (
						<DarkSvg
							className={styles.dark}
							height={22}
							width={22}
							data-ison={TheTheme}
						/>
					)}
					<motion.div
						className={styles.handle}
						layout
						transition={spring}
						data-ison={TheTheme}
					/>
					{TheTheme === "dark" && (
						<LightSvg
							className={styles.light}
							height={22}
							width={22}
							data-ison={TheTheme}
						/>
					)}
				</div>
			</div>
		</>
	);
}

const spring = {
	type: "spring",
	stiffness: 600,
	damping: 50,
};

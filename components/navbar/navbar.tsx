"use client";

import Link from "next/link";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";

import { MenuSvg } from "@/svgs/menu";

import styles from "./navbar.module.scss";

function Navbar() {
	const [showNav, setShowNav] = useState<boolean>(false);

	async function show() {
		setShowNav(!showNav);
	}

	useEffect(() => {
		function handleResize() {
			setShowNav(false);
		}

		window.addEventListener("resize", handleResize);

		return () => {
			window.removeEventListener("resize", handleResize);
		};
	}, []);

	useEffect(() => {
		function preventScroll(e: Event) {
			e.preventDefault();
		}

		if (showNav) {
			window.addEventListener("touchmove", preventScroll, {
				passive: false,
			});
			window.addEventListener("wheel", preventScroll, { passive: false });
		} else {
			window.removeEventListener("touchmove", preventScroll);
			window.removeEventListener("wheel", preventScroll);
		}

		return () => {
			window.removeEventListener("touchmove", preventScroll);
			window.removeEventListener("wheel", preventScroll);
		};
	}, [showNav]);

	return (
		<div className={styles.wrapper}>
			<motion.div
				className={styles.menu}
				onClick={show}
				aria-label="Toggle navigation"
				animate={{ rotate: showNav ? 90 : 0 }}
				transition={{ delay: showNav ? 0 : 0.2 }}
			>
				<MenuSvg className={styles.menuSvg} />
				Menu
			</motion.div>
			<nav className={styles.desktop}>
				<ul>
					<li className={styles.desktopItem}>
						<Link href="#about" className={styles.desktopLink}>
							about
						</Link>
					</li>
					<li className={styles.desktopItem}>
						<Link href="#projects" className={styles.desktopLink}>
							my work
						</Link>
					</li>
				</ul>
			</nav>
			<motion.div
				className={styles.mobile}
				initial={{ x: "100%" }}
				animate={{ x: showNav ? "0%" : "100%" }}
				transition={{
					duration: 0.3,
					ease: "easeInOut",
				}}
				aria-hidden={!showNav}
			>
				<div className={styles.closeNav}>
					<button onClick={show} aria-label="Close navigation">
						X
					</button>
				</div>
				<nav className={styles.mobileNav}>
					<ul>
						<li>
							<Link href="#about" className={styles.mobileItem}>
								about me
							</Link>
						</li>
						<hr className={styles.separator} />
						<li>
							<Link href="#projects" className={styles.mobileItem}>
								my work
							</Link>
						</li>
					</ul>
				</nav>
			</motion.div>
		</div>
	);
}

export { Navbar };

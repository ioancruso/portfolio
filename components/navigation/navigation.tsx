"use client";

import Link from "next/link";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

import { MenuSvg } from "@/svgs/menu";

import styles from "./navigation.module.scss";

function Navbar() {
	const [showNav, setShowNav] = useState<boolean>(false);

	useEffect(() => {
		function handleResize() {
			setShowNav(false);
		}

		window.addEventListener("resize", handleResize);

		return function () {
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

		return function () {
			window.removeEventListener("touchmove", preventScroll);
			window.removeEventListener("wheel", preventScroll);
		};
	}, [showNav]);

	return (
		<div className={styles.wrapper}>
			<AnimatePresence>
				{showNav && (
					<motion.div
						className={styles.navBackdrop}
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						exit={{ opacity: 0 }}
						transition={{ duration: 0.3 }}
					>
						<motion.div
							className={styles.navContent}
							initial={{ scale: 0.8 }}
							animate={{ scale: 1 }}
							exit={{ scale: 0.8 }}
							transition={{ duration: 0.3 }}
						>
							<button
								className={styles.closeButton}
								onClick={() => setShowNav(false)}
							>
								X
							</button>
							<nav>
								<ul>
									<li>
										<Link
											onClick={() => setShowNav(false)}
											href="#about"
											className={styles.link}
										>
											about me
										</Link>
									</li>
									<li>
										<Link
											onClick={() => setShowNav(false)}
											href="#projects"
											className={styles.link}
										>
											my work
										</Link>
									</li>
								</ul>
							</nav>
						</motion.div>
					</motion.div>
				)}
			</AnimatePresence>
			<motion.div
				className={styles.menu}
				onClick={() => setShowNav(true)}
				animate={{ scale: showNav ? 1.2 : 1 }}
				transition={{ type: "spring", stiffness: 300 }}
			>
				<MenuSvg />
				Meniu
			</motion.div>
			<nav className={styles.desktop}>
				<ul>
					<li>
						<Link href="#about">about me</Link>
					</li>
					<div className={styles.desktopSeparator}></div>
					<li>
						<Link href="#projects">my work</Link>
					</li>
				</ul>
			</nav>
		</div>
	);
}

export { Navbar };

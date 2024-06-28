"use client";

import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";

import { MenuSvg } from "@/svgs/menu";

import styles from "./navbar.module.scss";

function Navbar() {
	const [showNav, setShowNav] = useState<boolean>(false);

	const router = useRouter();
	const searchParams = useSearchParams();
	const page = searchParams.get("pagina");

	async function show() {
		setShowNav(!showNav);
	}

	useEffect(() => {
		const handleResize = () => {
			setShowNav(false);
		};

		window.addEventListener("resize", handleResize);

		return () => {
			window.removeEventListener("resize", handleResize);
		};
	}, []);

	useEffect(() => {
		const preventScroll = (e: Event) => e.preventDefault();

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

	useEffect(() => {
		if (page) {
			router.refresh();
		}
	}, [page]);

	return (
		<div className={styles.wrapper}>
			<motion.div
				className={styles.menu}
				onClick={show}
				animate={{ rotate: showNav ? 90 : 0 }}
				transition={{ delay: showNav ? 0 : 0.2 }}
			>
				<MenuSvg />
			</motion.div>
			<nav className={styles.desktop}>
				<ul>
					<li>
						<Link href="/">about me</Link>
					</li>
					<li>
						<Link href="/projects">my work</Link>
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
			>
				<div className={styles.closeNav}>
					<button onClick={show}>X</button>
				</div>
				<nav>
					<ul>
						<li>
							<Link onClick={show} href="/">
								about me
							</Link>
						</li>
						<hr className={styles.separator} />
						<li>
							<Link onClick={show} href="/projects">
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

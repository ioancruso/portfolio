"use client";

import { useEffect, useState } from "react";

import styles from "./projectcard.module.scss";

import Demo from "@/svgs/demo";
import Github from "@/svgs/github2";

interface Project {
	name: string;
	description: string;
	type: string;
	about: {
		demo: string;
		repository?: string;
		screenshot: string;
	};
}

function ProjectCard({ project }: { project: Project }) {
	const { name, description, type, about } = project;

	return (
		<>
			<div className={styles.projectCard}>
				<div className={styles.title}>{name}</div>
				<div className={styles.type}>- {type} -</div>
				<div className={styles.imageContainer}>
					<img
						src={`projects/${about.screenshot}`}
						className={styles.image}
					/>
				</div>
				<div className={styles.details}>
					<a
						href={about.demo}
						target="_blank"
						className={styles.button}
						rel="noopener noreferrer nofollow"
					>
						<Demo width={32} height={32} />
						<div>Demo</div>
					</a>
					{about.repository && (
						<a
							href={about.repository}
							target="_blank"
							className={styles.button}
							rel="noopener noreferrer nofollow"
						>
							<Github width={32} height={32} />
							<div>Repository</div>
						</a>
					)}
				</div>
				<div className={styles.about}>
					{description.split("///").map((item: string, index: number) => (
						<li key={index}>{item}</li>
					))}
				</div>
			</div>
		</>
	);
}

export { ProjectCard };

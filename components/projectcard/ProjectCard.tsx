"use client";

import Image from "next/image";

import styles from "./projectcard.module.scss";

import { Demo } from "@/svgs/demo";
import { GithubButton } from "@/svgs/githubButton";

interface Project {
	name: string;
	description: string[];
	type: string;
	tech: string[];
	about: {
		demo: string;
		repository?: string;
		screenshot: string;
	};
}

function ProjectCard({ project }: { project: Project }) {
	const { name, description, type, tech, about } = project;

	return (
		<>
			<div className={styles.projectCard}>
				<div className={styles.title}>{name}</div>
				<div className={styles.separator}>{type}</div>

				<div className={styles.techList}>
					{tech.map((techItem, index) => (
						<div key={index}>{techItem}</div>
					))}
				</div>

				<div className={styles.imageContainer}>
					<Image
						src={`/projects/${about.screenshot}`}
						width={1861}
						height={1051}
						className={styles.image}
						alt="project screenshot"
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
						<div>Live</div>
					</a>
					{about.repository && (
						<a
							href={about.repository}
							target="_blank"
							className={styles.button}
							rel="noopener noreferrer nofollow"
						>
							<GithubButton width={32} height={32} />
							<div>Repository</div>
						</a>
					)}
				</div>
				<div className={styles.about}>
					{description.map((item: string, index: number) => (
						<li key={index}>{item}</li>
					))}
				</div>
			</div>
		</>
	);
}

export { ProjectCard };

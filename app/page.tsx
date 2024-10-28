import Image from "next/image";

import { ProjectCard } from "@/components/projectcard/ProjectCard";

import { Github } from "@/svgs/github";
import { Linkedin } from "@/svgs/linkedin";
import { CV } from "@/svgs/cv";
import { Email } from "@/svgs/email";

import data from "@/data/about.json";
import projects from "@/data/projects.json";

import type { Metadata } from "next";

import styles from "./page.module.scss";

export const metadata: Metadata = {
	title: "About | Crușoveanu Ioan",
    description:
		"The official portfolio of Ioan Crușoveanu, showcasing me and my work.",
};

export default function Home() {
	const { description, email, github, linkedin, tech } = data;

	return (
		<div className={styles.wrapper}>
			<h1 id="about" className={`${styles.separator} ${styles.titles}`}>
				About Me
			</h1>
			<section className={styles.aboutSection}>
				<Image
					src="/me2.png"
					width={1280}
					height={1125}
					alt="Picture of Crușoveanu Ioan"
					className={styles.photo}
					priority
				/>
				<article className={styles.about}>
					<p className={styles.description}>{description}</p>

					<h3 className={styles.separator}>Technical Skills</h3>
					<div className={styles.techList}>
						{tech.map((techItem, index) => (
							<div key={index}>{techItem}</div>
						))}
					</div>

					<h3 className={styles.separator}>My Links</h3>
					<div className={styles.socials}>
						<a
							href="/CV.pdf"
							target="_blank"
							className={styles.socialButton}
							rel="noopener noreferrer nofollow"
							aria-label="View CV"
						>
							<CV width={51} height={51} />
							CV
						</a>
						<a
							href={linkedin}
							target="_blank"
							className={styles.socialButton}
							rel="noopener noreferrer"
							aria-label="LinkedIn Profile"
						>
							<Linkedin width={53} height={53} />
							Linkedin
						</a>
						<a
							href={`mailto:${email}`}
							target="_blank"
							className={styles.socialButton}
							rel="noopener noreferrer nofollow"
							aria-label="Send Email"
						>
							<Email width={56} height={56} />
							Email
						</a>
						<a
							href={github}
							target="_blank"
							className={styles.socialButton}
							rel="noopener noreferrer"
							aria-label="GitHub Profile"
						>
							<Github width={53} height={53} />
							Github
						</a>
					</div>
				</article>
			</section>
			<h2 id="projects" className={`${styles.separator} ${styles.titles}`}>
				Some of my work
			</h2>
			<section className={styles.projectsSection}>
				{[...projects].map((project) => (
					<ProjectCard key={project.id} project={project} />
				))}
			</section>
		</div>
	);
}

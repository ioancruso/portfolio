import Image from "next/image";
import type { Metadata } from "next";

import { Github } from "@/svgs/github";
import { Linkedin } from "@/svgs/linkedin";
import { CV } from "@/svgs/cv";
import { Email } from "@/svgs/email";

import data from "@/data/about.json";

import styles from "./page.module.scss";

export const metadata: Metadata = {
	title: "About | Crușoveanu Ioan",
	description:
		"The official portfolio of Ioan Crușoveanu, showcasing me and my work.",
};

export default function Home() {
	const { description, email, github, linkedin, tech } = data;

	return (
		<>
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
					<h1 className={styles.separator}>About Me</h1>
					<p className={styles.description}>{description}</p>

					<h2 className={styles.separator}>Technical Skills</h2>
					<div className={styles.techList}>
						{tech.map((techItem, index) => (
							<div key={index}>{techItem}</div>
						))}
					</div>

					<h2 className={styles.separator}>My Links</h2>
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
		</>
	);
}

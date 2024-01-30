import Image from "next/image";

import GitHub from "@/svgs/github";
import Linkedin from "@/svgs/linkedin";
import CV from "@/svgs/cv";
import Email from "@/svgs/email";

import data from "@/data/about.json";

import styles from "./page.module.scss";

export default function Home() {
	const { description, email, github, linkedin } = data;

	return (
		<>
			<div className={styles.aboutSection}>
				<Image
					src="/me2.png"
					width={1280}
					height={1125}
					alt="me"
					className={styles.photo}
					priority
				/>
				<div className={styles.about}>
					<div className={styles.description}>{description}</div>
					<div className={styles.socials}>
						<div className={styles.list}>
							<a
								href="/MY_CV.pdf"
								target="_blank"
								className={styles.socialsButton}
								rel="noopener noreferrer nofollow"
							>
								<CV />
								<div className={styles.socialName}>CV</div>
							</a>
							<a
								href={linkedin}
								target="_blank"
								className={styles.socialsButton}
								rel="noopener noreferrer"
							>
								<Linkedin width={55} height={55} />
								<div className={styles.socialName}>Linkedin</div>
							</a>
							<a
								href={`mailto:${email}`}
								target="_blank"
								className={styles.socialsButton}
								rel="noopener noreferrer nofollow"
							>
								<Email width={58} height={58} />
								<div className={styles.socialName}>Email</div>
							</a>
							<a
								href={github}
								target="_blank"
								className={styles.socialsButton}
								rel="noopener noreferrer"
							>
								<GitHub width={55} height={55} />
								<div className={styles.socialName}>Github</div>
							</a>
						</div>
					</div>
				</div>
			</div>
		</>
	);
}

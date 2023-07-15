import Image from 'next/image';
import { useTheme } from "next-themes";

import { useEffect } from 'react';

import styles from "../../styles/content/components/projectcard.module.scss";

import NoSSRWrapper from '../NoSSRWrapper';

import Technologies from '../../svgs/technologies';
import Demo from '../../svgs/demo';
import Github from '../../svgs/github2';

function ProjectCard(props) {

    const project = props.project;
    const { name, description, photos, about } = project;

    const { theme, setTheme } = useTheme();

    useEffect(() => {
        const prefersDarkTheme = window.matchMedia("(prefers-color-scheme: dark)").matches;
        if (theme === "system" && typeof window !== "undefined") {
            setTheme(prefersDarkTheme ? "dark" : "light");
        }
    }, [theme, setTheme]);

    return <>
        <div className={styles.projectCard}>          
            <div className={styles.title}>{name}</div>
            <div className={styles.presentation}>               
                <div className={styles.placeholder}>
                    <NoSSRWrapper>
                        <Image
                            src={theme === 'dark' ? photos.dark : photos.light}
                            width={2451}
                            height={1360}
                            alt="me"
                            className={styles.image}
                        />
                    </NoSSRWrapper>
                </div>
                <div className={styles.details}>
                    <a className={styles.category}>
                        <Technologies width={46} height={46}/>
                        <div>{about.technologies}</div>
                    </a>
                    <div>
                        <a href={about.demo} target="_blank" className={`${styles.category} ${styles.link}`}>
                            <Demo width={50} height={50}/>
                            <div>Demo</div>
                        </a>
                        <a href={about.repository} target="_blank" className={`${styles.category} ${styles.link}`}>
                            <Github width={50} height={50}/>
                            <div>Repository</div>
                        </a>
                    </div>
                </div>
            </div>
            <div className={styles.about}>
                {description.split("/").map((item, index) => (
                    <li key={index}>{item}</li>
                ))}
            </div>
        </div>
    </>
} 
  
export {ProjectCard}
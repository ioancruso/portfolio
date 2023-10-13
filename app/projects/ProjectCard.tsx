"use client";

import {useTheme} from "next-themes";

import {useEffect, useState} from "react";

import styles from "./projectcard.module.scss";

import Technologies from "@/svgs/technologies";
import Demo from "@/svgs/demo";
import Github from "@/svgs/github2";

interface Project {
    name: string;
    description: string;
    preview: string;
    about: {
        demo: string;
        repository?: string;
    };
}

interface ProjectCardProps {
    project: Project;
}

function ProjectCard(props: ProjectCardProps) {
    const project = props.project;
    const {name, description, preview, about} = project;
    const [iframeLoaded, setIframeLoaded] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => {
            setIframeLoaded(true);
        }, 300); // Set the iframeLoaded state to true after 2 seconds

        return () => clearTimeout(timer); // Clear the timeout if the component is unmounted before 2 seconds
    }, []);

    return (
        <>
            <div className={styles.projectCard}>
                <div className={styles.title}>{name}</div>
                <div className={styles.presentation}>
                    <iframe
                        src={preview}
                        className={`${styles.iframe} ${
                            iframeLoaded
                                ? styles.iframeVisible
                                : styles.iframeHidden
                        }`}
                        title="Embedded Site"
                        scrolling="no"
                    ></iframe>
                    <div className={styles.details}>
                        <a
                            href={about.demo}
                            target="_blank"
                            className={`${styles.category} ${styles.link}`}
                            rel="noopener noreferrer"
                        >
                            <Demo width={50} height={50} />
                            <div>Demo</div>
                        </a>
                        {about.repository && (
                            <a
                                href={about.repository}
                                target="_blank"
                                className={`${styles.category} ${styles.link}`}
                                rel="noopener noreferrer"
                            >
                                <Github width={50} height={50} />
                                <div>Repository</div>
                            </a>
                        )}
                    </div>
                </div>
                <div className={styles.about}>
                    {description
                        .split("/")
                        .map((item: string, index: number) => (
                            <li key={index}>{item}</li>
                        ))}
                </div>
            </div>
        </>
    );
}

export {ProjectCard};

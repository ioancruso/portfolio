import type {Metadata} from "next";

import {ProjectCard} from "./ProjectCard";

import styles from "./page.module.scss";

import data from "@/data/projects.json";

export const metadata: Metadata = {
    title: "Portfolio",
};

export default function Home() {
    return (
        <>
            <div className={styles.projectsSection}>
                {[...data].map((project) => (
                    <ProjectCard key={project.id} project={project} />
                ))}
            </div>
        </>
    );
}

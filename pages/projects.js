import { ProjectCard } from "../components/content/ProjectCard"
import Head from 'next/head'

import styles from "../styles/content/components/projects.module.scss";

import data from '../data/projects.json';

function Projects() {

    return <>
        <Head>
            <title>My projects</title>
        </Head>
        <div className={styles.projectsSection}>
        {data.map((project) => (
                <ProjectCard key={project.id} project={project}/>
        ))}
        </div>
    </>
}
  
export default Projects

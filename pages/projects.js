import { ProjectCard } from "../components/content/ProjectCard"

import styles from "../styles/content/components/projects.module.scss";

import data from '../data/projects.json';

function Projects() {

    return <>
        <div className={styles.projectsSection}>
            {data.map((project) => (
                <ProjectCard key={project.id} project={project}/>
            ))}
        </div>
    </>
}
  
export default Projects

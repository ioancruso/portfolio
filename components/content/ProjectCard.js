import Image from 'next/image';
import { useState, useEffect } from 'react';

import styles from "../../styles/content/components/projectcard.module.scss";

import Technologies from '../../svgs/technologies';
import Demo from '../../svgs/demo';
import Github from '../../svgs/github2';

function ProjectCard(props) {

    const [imageLoaded, setImageLoaded] = useState(false);

    const project = props.project;
    const { name, description, photos, about } = project;

    const [theme, setTheme] = useState("dark");
    const [isDesktop, setIsDesktop] = useState(false);

    useEffect(() => {
        const htmlElement = document.documentElement;
        const currentTheme = htmlElement.getAttribute('data-theme');
        setTheme(currentTheme);
    
        const observer = new MutationObserver(mutationsList => {
            for(let mutation of mutationsList) {
                if (mutation.type === 'attributes' && mutation.attributeName === 'data-theme') {
                    setTheme(htmlElement.getAttribute('data-theme'));
                }
            }
        });
    
        const config = { attributes: true, attributeFilter: ['data-theme'] };
      
        observer.observe(htmlElement, config);

        return () => observer.disconnect();
    
    }, []);

    useEffect(() => {
        const matcher = window.matchMedia(`(min-width: 71em)`);
    
        const updateMatch = (e) => setIsDesktop(e.matches);
        updateMatch(matcher);
    
        matcher.addEventListener('change', updateMatch);
    
        return () => matcher.removeEventListener('change', updateMatch);
    }, []);

    const handleImageLoad = () => {
        setImageLoaded(true);
    };

    return <>
        <div className={styles.projectCard}>          
            <div className={styles.title}>{name}</div>
            <div className={styles.presentation}>                
                <Image
                    src={theme === 'dark' ? photos.dark : photos.light}
                    width={2443}
                    height={1374}
                    alt="me"
                    className={`${styles.image} ${imageLoaded ? '' : styles.placeholder}`}
                    onLoad={handleImageLoad}
                />
                <div className={styles.details}>
                    <div className={styles.category}>
                        <Technologies/>
                        <span>Used: {about.technologies}</span>
                    </div>
                    <a href={about.demo} className={`${styles.category} ${styles.link}`}>
                        <Demo/>
                        <span>Live Demo</span>
                    </a>
                    <a href={about.repository} className={`${styles.category} ${styles.link}`}>
                        <Github width={35} height={35}/>
                        <span>Project Repository</span>
                    </a>
                </div>
            </div>
            <div className={styles.about}>
                {description}
            </div>
        </div>
    </>
} 
  
export {ProjectCard}

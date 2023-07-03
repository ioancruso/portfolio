import Image from 'next/image';

import { useState } from 'react';

import GitHub from '../../svgs/github'
import Linkedin from '../../svgs/linkedin'
import CV from '../../svgs/cv';
import Email from '../../svgs/email';

import data from '../../data/about.json'

import styles from "../../styles/content/components/aboutme.module.scss";

function AboutMe() {

    const [imageLoaded, setImageLoaded] = useState(false);
    
    const { description, email, github, linkedin } = data;

    const handleImageLoad = () => {
        setImageLoaded(true);
    };

    return <>
        <div className={styles.aboutSection}>
            <Image
                src="/me2.png"
                width={1280}
                height={1125}
                alt="me"
                className={`${styles.photo} ${imageLoaded ? '' : styles.placeholder}`}
                onLoad={handleImageLoad}
            />
            <div className={styles.about}>
                <div className={styles.description}>
                    {description} 
                </div>
                <div className={styles.socials}>

                    <div className={styles.list}>
                        <a href='/CV.pdf' target="_blank" className={styles.cv}> 
                            <CV/>
                            <span>CV</span>
                        </a>
                        <a href={linkedin} target="_blank" className={styles.socialsButton}>
                            <Linkedin width={55} height={55}/>
                            <div className={styles.socialName}>
                                Linkedin
                            </div>
                        </a>
                        <a href={`mailto:${email}`} target="_blank" className={styles.socialsButton}>
                            <Email width={58} height={58}/>
                            <div className={styles.socialName}>
                                Email
                            </div>
                        </a>  
                        <a href={github} target="_blank" className={styles.socialsButton}>             
                            <GitHub width={55} height={55}/>
                            <div className={styles.socialName}>
                                Github
                            </div>
                        </a>    
                    </div>                   
                </div>
            </div>
        </div>
    </>
}
  
export {AboutMe}

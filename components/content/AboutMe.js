import Image from 'next/image';

import GitHub from '../../svgs/github'
import Linkedin from '../../svgs/linkedin'
import Instagram from '../../svgs/instagram';
import CV from '../../svgs/cv';
import Email from '../../svgs/email';

import data from '../../data/about.json'

import styles from "../../styles/content/components/aboutme.module.scss";

function AboutMe() {
    
    const { description, email, github, instagram, linkedin } = data;

    return <>
        <div className={styles.aboutSection}>
            <div className={styles.photo}>
                <Image
                    src="/me.png"
                    fill
                    alt="me"
                />
            </div>
            <div className={styles.about}>
                <div className={styles.description}>
                    {description} 
                </div>
                <a href='/cv.pdf' target="_blank" className={styles.cv}> 
                    <CV/>
                    <span>See my CV here</span>
                </a>
                <div className={styles.socials}>
                    <div className={styles.title}>
                        You can find me on:
                    </div>
                    <div className={styles.list}>
                        <a href={linkedin} target="_blank" className={styles.socialsButton}>
                            <Linkedin/>
                            <div className={styles.socialName}>
                                Linkedin
                            </div>
                        </a>      
                        <a href={github} target="_blank" className={styles.socialsButton}>             
                            <GitHub/>
                            <div className={styles.socialName}>
                                Github
                            </div>
                        </a>
                        <a href={`mailto:${email}`} target="_blank" className={styles.socialsButton}>
                            <Email/>
                            <div className={styles.socialName}>
                                Email
                            </div>
                        </a>     
                        <a href={instagram} target="_blank" className={styles.socialsButton}>
                            <Instagram/>
                            <div className={styles.socialName}>
                                Instagram
                            </div>
                        </a>
                    </div>                   
                </div>
            </div>
        </div>
    </>
}
  
export {AboutMe}

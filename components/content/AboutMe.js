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
            <Image
                src="/me.png"
                width={1000}
                height={1000}
                alt="me"
                className={styles.photo}
            />
            <div className={styles.about}>
                <div className={styles.description}>
                    {description} 
                </div>
                <a href='/CV.pdf' target="_blank" className={styles.cv}> 
                    <CV/>
                    <span>See my CV here</span>
                </a>
                <div className={styles.socials}>
                    <div className={styles.title}>
                        You can find me on:
                    </div>
                    <div className={styles.list}>
                        <a href={linkedin} target="_blank" className={styles.socialsButton}>
                            <Linkedin width={55} height={55}/>
                            <div className={styles.socialName}>
                                Linkedin
                            </div>
                        </a>
                        <a href={instagram} target="_blank" className={styles.socialsButton}>
                            <Instagram width={55} height={55}/>
                            <div className={styles.socialName}>
                                Instagram
                            </div>
                        </a>      
                        <a href={github} target="_blank" className={styles.socialsButton}>             
                            <GitHub width={55} height={55}/>
                            <div className={styles.socialName}>
                                Github
                            </div>
                        </a>
                        <a href={`mailto:${email}`} target="_blank" className={styles.socialsButton}>
                            <Email width={58} height={58}/>
                            <div className={styles.socialName}>
                                Email
                            </div>
                        </a>      
                    </div>                   
                </div>
            </div>
        </div>
    </>
}
  
export {AboutMe}

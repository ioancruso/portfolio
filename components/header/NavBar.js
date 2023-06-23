import styles from "../../styles/header/components/navbar.module.scss";

function NavBar() {
    
    return <>
        <div className={styles.wrapper}>
            <div className={styles.navbar}>
                <nav>
                    <ul>
                        <li><a href="/">About</a></li>
                        <li><a href="/projects">Portofolio</a></li>
                    </ul>
                </nav>
            </div>
        </div>
    </>
}
  
export {NavBar}

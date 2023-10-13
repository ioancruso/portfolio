import Link from "next/link";

import styles from "./navbar.module.scss";

function NavBar() {
    return (
        <>
            <div className={styles.wrapper}>
                <nav className={styles.navbar}>
                    <ul>
                        <li>
                            <Link href="/">About</Link>
                        </li>
                        <li>
                            <Link href="/projects">Portfolio</Link>
                        </li>
                    </ul>
                </nav>
            </div>
        </>
    );
}

export {NavBar};

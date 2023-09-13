import {NavBar} from "@/components/header/NavBar";
import {ThemeSwitch} from "@/components/header/ThemeSwitcher";

import styles from "../styles/header/header.module.scss";

function Header() {
    return (
        <>
            <div className={styles.header}>
                <NavBar />
                <ThemeSwitch />
            </div>
        </>
    );
}

export {Header};

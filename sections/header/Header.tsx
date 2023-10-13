import {NavBar} from "./navbar/NavBar";
import {ThemeSwitch} from "./ThemeSwitcher/ThemeSwitcher";

import styles from "./header.module.scss";

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

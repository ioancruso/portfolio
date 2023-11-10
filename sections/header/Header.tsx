import {NavBar} from "./navbar/NavBar";
import {ThemeSwitcher} from "./ThemeSwitcher/ThemeSwitcher";

import styles from "./header.module.scss";

export type theme = "light" | "dark";

export type HeaderProps = {
    theme: theme;
};

async function Header({theme}: HeaderProps) {
    return (
        <>
            <div className={styles.header}>
                <NavBar />
                <ThemeSwitcher theme={theme as theme} />
            </div>
        </>
    );
}

export {Header};

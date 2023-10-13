"use client";

import {useEffect, useState} from "react";

import {useTheme} from "next-themes";
import {motion} from "framer-motion";

import Darkmode from "@/svgs/dark";
import Lightmode from "@/svgs/light";

import styles from "./switcher.module.scss";

function ThemeSwitch() {
    const {resolvedTheme, setTheme} = useTheme();
    const [theme, setTheTheme] = useState("none");
    const [mounted, setMounted] = useState(false);

    const toggle = () => {
        setTheme(resolvedTheme === "light" ? "dark" : "light");
    };

    useEffect(() => {
        if (resolvedTheme) {
            setTheTheme(resolvedTheme);
        }
    }, [resolvedTheme]);

    useEffect(() => {
        setMounted(true);
    }, []);

    return (
        <>
            <div className={styles.wrapper}>
                <div
                    className={styles.switch}
                    data-ison={theme}
                    onClick={toggle}
                >
                    {mounted && (
                        <>
                            {theme == "light" && (
                                <Darkmode
                                    className={styles.dark}
                                    height={25}
                                    width={25}
                                    data-ison={theme}
                                />
                            )}
                            <motion.div
                                className={styles.handle}
                                layout
                                transition={spring}
                                data-ison={theme}
                            />
                            {theme == "dark" && (
                                <Lightmode
                                    className={styles.light}
                                    height={25}
                                    width={25}
                                    data-ison={theme}
                                />
                            )}
                        </>
                    )}
                </div>
            </div>
        </>
    );
}

const spring = {
    type: "spring",
    stiffness: 600,
    damping: 50,
};

export {ThemeSwitch};

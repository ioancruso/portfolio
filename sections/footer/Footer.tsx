import styles from "./footer.module.scss";

import data from "@/data/about.json";

function Footer() {
    const {name, footer} = data;

    return (
        <>
            <div className={styles.footer}>
                <div>
                    {name} © {footer}
                </div>
            </div>
        </>
    );
}

export {Footer};

import styles from "../styles/footer/footer.module.scss";

import data from '../data/about.json'

function Footer() {

    const { name, footer } = data;

    return <>
        <div className={styles.footer}>
            <div>2023 * {name} - {footer}</div>
        </div>
    </>
}
  
export { Footer }

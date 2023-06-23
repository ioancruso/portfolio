import { ThemeProvider } from "next-themes";

import { Header } from "../sections/Header";
import { Footer } from "../sections/Footer";

import "../styles/base.css";
import styles from "../styles/content/content.module.scss"

export default function MyApp({ Component, pageProps }) {

    return <> 
        <ThemeProvider>
            <Header/>
            <div className={styles.content}>
                <Component {...pageProps}/>
            </div>
            <Footer/>
        </ThemeProvider>
    </>
}
import { ThemeProvider } from "next-themes";
import Head from 'next/head'

import { Header } from "../sections/Header";
import { Footer } from "../sections/Footer";

import "../styles/base.css";
import styles from "../styles/content/content.module.scss"

export default function MyApp({ Component, pageProps }) {

    return <>
        <ThemeProvider>
            <Head>
                <link rel="icon" href="/favicon2.svg" sizes="any" />
            </Head>
            <Header/>
            <div className={styles.content}>
                <Component {...pageProps}/>
            </div>
            <Footer/>
        </ThemeProvider>
    </>
}
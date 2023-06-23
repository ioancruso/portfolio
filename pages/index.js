import Head from 'next/head'

import { AboutMe } from "../components/content/AboutMe"

function HomePage() {

    return <>
        <Head>
            <title>Hi!</title>
        </Head>
        <AboutMe/>
    </>
}
  
export default HomePage

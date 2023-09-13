import Head from "next/head";

import {AboutMe} from "../components/content/AboutMe";

function HomePage() {
    return (
        <>
            <Head>
                <title>Hi! I'm Ioan.</title>
            </Head>
            <AboutMe />
        </>
    );
}

export default HomePage;

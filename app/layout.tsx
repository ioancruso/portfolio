import type {Metadata} from "next";

import {Header} from "@/sections/header/Header";
import {Footer} from "@/sections/footer/Footer";

import ThemeProvider from "@/providers/ThemeProvider";

import "./layout.scss";

export const metadata: Metadata = {
    title: {
        template: "%s | Crușoveanu Ioan",
        default: "About | Crușoveanu Ioan",
    },
    description:
        "The official portfolio of Ioan Crușoveanu, showcasing me and my work.",
};

export default function RootLayout({children}: {children: React.ReactNode}) {
    return (
        <html lang="en" suppressHydrationWarning={true}>
            <body>
                <ThemeProvider>
                    <Header />
                    {children}
                    <Footer />
                </ThemeProvider>
            </body>
        </html>
    );
}

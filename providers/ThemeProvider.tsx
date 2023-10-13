"use client";

import {ThemeProvider} from "next-themes";

function Theme({children}: {children: React.ReactNode}) {
    return <ThemeProvider>{children}</ThemeProvider>;
}

export default Theme;

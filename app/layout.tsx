import type { Metadata } from "next";
import { cookies } from "next/headers";

import { Analytics } from "@vercel/analytics/react";

import { Header } from "@/sections/header/header";
import { Footer } from "@/sections/footer/footer";

import type { theme } from "@/sections/header/header";

import "./layout.scss";

export const metadata: Metadata = {
	title: {
		template: "%s | Crușoveanu Ioan",
		default: "About | Crușoveanu Ioan",
	},
	description:
		"The official portfolio of Ioan Crușoveanu, showcasing me and my work.",
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	const cookieStore = cookies();
	const cookie = cookieStore.get("theme");
	let theme: string = "dark";

	if (cookie) {
		theme = cookie?.value;
	}
	return (
		<html lang="en" data-theme={theme}>
			<body>
				<Header theme={theme as theme} />
				{children}
				<Footer />
				<Analytics />
			</body>
		</html>
	);
}

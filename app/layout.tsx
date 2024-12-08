import React from "react";
import { cookies } from "next/headers";

import { Analytics } from "@vercel/analytics/next";
import { AppSidebar } from "@/components/app-sidebar";
import {
	SidebarProvider,
	SidebarInset,
	SidebarTrigger,
} from "@/components/ui/sidebar";
import { Separator } from "@/components/ui/separator";
import { BreadcrumbTrail } from "@/components/ui/breadcrumb";

import type { Metadata } from "next";
import type { theme } from "@/types.ts";

import "./globals.css";

export const metadata: Metadata = {
	title: {
		template: "%s | Crușoveanu Ioan",
		default: "Home | Crușoveanu Ioan",
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
	let theme: theme = "dark";

	if (cookie && (cookie.value === "dark" || cookie.value === "light")) {
		theme = cookie.value as theme;
	}

	return (
		<html lang="en" data-theme={theme}>
			<body className="flex h-screen">
				<SidebarProvider>
					<AppSidebar theme={theme} />

					<SidebarInset>
						<header className="flex h-16 shrink-0 items-center gap-2 border-b">
							<div className="flex items-center gap-2 px-3">
								<SidebarTrigger />
								<Separator
									orientation="vertical"
									className="mr-2 h-4 w-[1px] bg-gray-300"
								/>
								<BreadcrumbTrail />
							</div>
						</header>

						<main className="flex flex-1 flex-col gap-4 p-4">
							{children}
						</main>
					</SidebarInset>
				</SidebarProvider>
				<Analytics />
			</body>
		</html>
	);
}

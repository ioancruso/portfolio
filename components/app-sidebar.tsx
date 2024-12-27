"use client";

import React from "react";
import { usePathname, useSearchParams } from "next/navigation";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
	Sidebar,
	SidebarContent,
	SidebarGroup,
	SidebarHeader,
	SidebarMenu,
	SidebarMenuButton,
	SidebarMenuItem,
	SidebarMenuSub,
	SidebarMenuSubButton,
	SidebarMenuSubItem,
} from "@/components/ui/sidebar";
import { ModeToggle } from "@/components/themeswitcher/themeswitcher";

import data from "@/data/data.json";

import type { theme } from "@/types";

const navMain = [
	{
		title: "Home",
		url: "/",
	},
	{
		title: "About Me",
		url: "/about",
		items: data.sidebar.items,
	},
	{
		title: "Public Work",
		url: "/work",
		items: [],
	},
	{
		title: "Connect",
		url: null,
		items: data.sidebar.connect,
	},
];

export function AppSidebar({
	theme,
	...props
}: React.ComponentProps<typeof Sidebar> & { theme: theme }) {
	const currentPath = usePathname();
	const searchParams = useSearchParams();
	const currentPublicWorkSection = searchParams.get("p");
	const currentAboutSection = searchParams.get("s");

	const publicWorkProjects = data.publicWork.projects.map((project) => ({
		title: project.title,
		url: `/work?p=${project.key}`,
	}));

	const updatedNavMain = navMain.map((item) => {
		if (item.title === "Public Work") {
			return {
				...item,
				items: publicWorkProjects,
			};
		}
		return item;
	});

	return (
		<Sidebar {...props}>
			<SidebarHeader>
				<SidebarMenu>
					<SidebarMenuItem>
						<SidebarMenuButton size="lg" asChild>
							<span>
								<Avatar>
									<AvatarImage
										src="/me2.png"
										alt="Crușoveanu Ioan"
									/>
									<AvatarFallback>CI</AvatarFallback>
								</Avatar>
								<div className="flex flex-col gap-0.5 leading-none">
									<span className="font-semibold">
										Crușoveanu Ioan
									</span>
								</div>
							</span>
						</SidebarMenuButton>
					</SidebarMenuItem>
				</SidebarMenu>
			</SidebarHeader>
			<SidebarContent className="flex-col justify-between">
				<SidebarGroup>
					<SidebarMenu>
						{updatedNavMain.map((item) => (
							<SidebarMenuItem key={item.title}>
								<SidebarMenuButton
									asChild
									className={
										currentPath === item.url &&
										!(
											(item.title === "Public Work" &&
												currentPublicWorkSection) ||
											(item.title === "About Me" &&
												currentAboutSection)
										)
											? "bg-secondary"
											: ""
									}
								>
									{item.url ? (
										<a
											href={item.url}
											className="font-bold"
										>
											{item.title}
										</a>
									) : (
										<a className="font-bold">
											{item.title}
										</a>
									)}
								</SidebarMenuButton>
								{item.items?.length ? (
									<SidebarMenuSub>
										{item.items.map((subItem) => {
											const isConnect =
												item.title === "Connect";

											let isActive = false;

											if (
												item.title === "About Me" &&
												currentPath === "/about"
											) {
												const subKey =
													subItem.url.split("s=")[1];
												if (
													subKey &&
													subKey ===
														currentAboutSection
												) {
													isActive = true;
												}
											}

											if (
												item.title === "Public Work" &&
												currentPath === "/work"
											) {
												const subKey =
													subItem.url.split("p=")[1];
												if (
													subKey &&
													subKey ===
														currentPublicWorkSection
												) {
													isActive = true;
												}
											}

											return (
												<SidebarMenuSubItem
													key={subItem.title}
												>
													<SidebarMenuSubButton
														asChild
														className={
															isActive
																? "bg-secondary"
																: ""
														}
													>
														<a
															href={subItem.url}
															target={
																isConnect
																	? "_blank"
																	: "_self"
															}
															rel={
																isConnect
																	? "noopener noreferrer"
																	: undefined
															}
															className="font-normal"
														>
															{subItem.title}
														</a>
													</SidebarMenuSubButton>
												</SidebarMenuSubItem>
											);
										})}
									</SidebarMenuSub>
								) : null}
							</SidebarMenuItem>
						))}
					</SidebarMenu>
				</SidebarGroup>
			</SidebarContent>
			<div className="ml-5 mb-5">
				<ModeToggle />
			</div>
		</Sidebar>
	);
}

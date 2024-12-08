"use client";

import * as React from "react";
import { usePathname, useSearchParams } from "next/navigation";
import { ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";

import data from "@/data/data.json";

export const Breadcrumb = React.forwardRef<
	HTMLElement,
	React.ComponentPropsWithoutRef<"nav">
>(({ className, ...props }, ref) => (
	<nav
		ref={ref}
		aria-label="breadcrumb"
		className={cn("text-sm text-muted-foreground", className)}
		{...props}
	/>
));
Breadcrumb.displayName = "Breadcrumb";

export const BreadcrumbList = React.forwardRef<
	HTMLOListElement,
	React.ComponentPropsWithoutRef<"ol">
>(({ className, ...props }, ref) => (
	<ol
		ref={ref}
		className={cn("flex items-center space-x-1", className)}
		{...props}
	/>
));
BreadcrumbList.displayName = "BreadcrumbList";

export const BreadcrumbItem = React.forwardRef<
	HTMLLIElement,
	React.ComponentPropsWithoutRef<"li">
>(({ className, ...props }, ref) => (
	<li
		ref={ref}
		className={cn("inline-flex items-center", className)}
		{...props}
	/>
));
BreadcrumbItem.displayName = "BreadcrumbItem";

export const BreadcrumbLink = React.forwardRef<
	HTMLAnchorElement,
	React.ComponentPropsWithoutRef<"a">
>(({ className, ...props }, ref) => (
	<a
		ref={ref}
		className={cn(
			"text-muted-foreground hover:text-foreground transition-colors",
			className,
		)}
		{...props}
	/>
));
BreadcrumbLink.displayName = "BreadcrumbLink";

export const BreadcrumbPage = React.forwardRef<
	HTMLSpanElement,
	React.ComponentPropsWithoutRef<"span">
>(({ className, ...props }, ref) => (
	<span
		ref={ref}
		role="link"
		aria-disabled="true"
		aria-current="page"
		className={cn("font-semibold text-foreground", className)}
		{...props}
	/>
));
BreadcrumbPage.displayName = "BreadcrumbPage";

export const BreadcrumbSeparator = React.forwardRef<
	HTMLLIElement,
	React.ComponentPropsWithoutRef<"li">
>(({ className, ...props }, ref) => (
	<li
		ref={ref}
		aria-hidden="true"
		className={cn("flex-shrink-0 text-muted-foreground", className)}
		{...props}
	>
		<ChevronRight className="h-4 w-4" />
	</li>
));
BreadcrumbSeparator.displayName = "BreadcrumbSeparator";

export function BreadcrumbTrail() {
	const pathname = usePathname();
	const searchParams = useSearchParams();

	if (pathname === "/") {
		return (
			<Breadcrumb>
				<BreadcrumbList>
					<BreadcrumbItem>
						<BreadcrumbPage>Home</BreadcrumbPage>
					</BreadcrumbItem>
				</BreadcrumbList>
			</Breadcrumb>
		);
	}

	const pathParts = pathname
		.split("/")
		.filter((part) => part)
		.map((part, index, arr) => ({
			name: part.charAt(0).toUpperCase() + part.slice(1),
			href: `/${arr.slice(0, index + 1).join("/")}`,
		}));

	// Specific handling for `/work` with `p` parameter
	if (pathname === "/work") {
		const projectKey = searchParams.get("p");
		pathParts[pathParts.length - 1].name = "Work";

		if (projectKey) {
			const project = data.publicWork.projects.find(
				(project) => project.key === projectKey,
			);

			if (project) {
				pathParts.push({
					name: project.title,
					href: `${pathname}?p=${projectKey}`,
				});
			}
		}
	}

	// Specific handling for `/about` with `s` parameter
	if (pathname === "/about") {
		const sectionKey = searchParams.get("s");

		if (sectionKey) {
			const section = data.sidebar.items.find(
				(item) => item.url === `/about?s=${sectionKey}`,
			);

			if (section) {
				pathParts.push({
					name: section.title,
					href: section.url,
				});
			}
		}
	}

	return (
		<Breadcrumb>
			<BreadcrumbList>
				<BreadcrumbItem>
					<BreadcrumbLink href="/">Home</BreadcrumbLink>
				</BreadcrumbItem>

				{pathParts.map((part, index) => (
					<React.Fragment key={part.href}>
						<BreadcrumbSeparator />
						<BreadcrumbItem>
							{index === pathParts.length - 1 ? (
								<BreadcrumbPage>{part.name}</BreadcrumbPage>
							) : (
								<BreadcrumbLink href={part.href}>
									{part.name}
								</BreadcrumbLink>
							)}
						</BreadcrumbItem>
					</React.Fragment>
				))}
			</BreadcrumbList>
		</Breadcrumb>
	);
}

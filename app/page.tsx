"use client";

import React from "react";
import Link from "next/link";

import { motion } from "framer-motion";

import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";

import data from "@/data/data.json";

export default function HomePage() {
	const { title, subtitle, description, buttons, secondaryButtons } =
		data.home;

	const animationVariants = {
		hidden: { opacity: 0, y: 50 },
		visible: { opacity: 1, y: 0 },
	};

	return (
		<motion.main
			initial="hidden"
			animate="visible"
			variants={animationVariants}
			transition={{ duration: 0.5 }}
			className="flex flex-col items-center bg-primary text-text py-6 px-4"
		>
			<h1 className="text-3xl font-extrabold mb-4 text-highlight text-center tracking-wide mt-[0vh] sm:mt-[20vh]">
				{title}
			</h1>
			<p className="text-sm text-muted text-center max-w-prose mb-3">
				{subtitle}
			</p>
			<Separator className="w-full max-w-xs mx-auto mb-8 opacity-50" />
			<p className="text-base font-light text-muted text-center max-w-prose leading-relaxed mx-auto mb-8">
				{description}
			</p>

			<div className="flex flex-col sm:flex-row items-center justify-center gap-4">
				{secondaryButtons.map((button, index) => (
					<React.Fragment key={index}>
						<Button
							variant={
								(button.variant as
									| "outline"
									| "default"
									| "destructive"
									| "link"
									| "secondary"
									| "ghost") || "outline"
							}
						>
							<a
								href={button.link}
								target="_blank"
								rel={button.label}
								className="inline-block"
							>
								{button.label}
							</a>
						</Button>

						{index < secondaryButtons.length - 1 && (
							<>
								<Separator
									orientation="horizontal"
									className="block sm:hidden w-6 h-[1px] bg-gray-300"
								/>
								<Separator
									orientation="vertical"
									className="hidden sm:block w-[1px] h-6 bg-gray-300"
								/>
							</>
						)}
					</React.Fragment>
				))}
			</div>

			<Separator
				orientation="horizontal"
				className="block max-w-[60%] sm:w-[300px] h-[1px] bg-gray-300 m-7 mx-auto"
			/>

			<div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-6">
				{buttons.map((button, index) => (
					<React.Fragment key={index}>
						<Button
							variant={
								(button.variant as
									| "outline"
									| "default"
									| "destructive"
									| "link"
									| "secondary"
									| "ghost") || "default"
							}
						>
							<Link href={button.link}>{button.label}</Link>
						</Button>
						{index < buttons.length - 1 && (
							<>
								<Separator
									orientation="horizontal"
									className="block sm:hidden w-6 h-[1px] bg-gray-300"
								/>
								<Separator
									orientation="vertical"
									className="hidden sm:block w-[1px] h-6 bg-gray-300"
								/>
							</>
						)}
					</React.Fragment>
				))}
			</div>
		</motion.main>
	);
}

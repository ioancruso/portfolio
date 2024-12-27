"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { useSearchParams } from "next/navigation";
import Image from "next/image"; // Import the Image component
import {
	Carousel,
	CarouselContent,
	CarouselItem,
	CarouselNext,
	CarouselPrevious,
} from "@/components/ui/carousel";
import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";

import { getIcon } from "@/hooks/getIcon";

import type { CarouselApi } from "@/components/ui/carousel";

import data from "@/data/data.json";

export default function WorkPage() {
	const { projects } = data.publicWork;
	const searchParams = useSearchParams();
	const projectKey = searchParams.get("p");

	const [api, setApi] = useState<CarouselApi>();
	const [current, setCurrent] = useState(0);
	const [count, setCount] = useState(0);

	useEffect(() => {
		if (!api) return;

		const totalSlides = api.scrollSnapList().length;
		setCount(totalSlides);

		setCurrent(api.selectedScrollSnap());
		api.on("select", () => setCurrent(api.selectedScrollSnap()));
	}, [api]);

	const goToSlide = (index: number) => {
		api?.scrollTo(index);
	};

	const animationVariants = {
		hidden: { opacity: 0, y: 50 },
		visible: { opacity: 1, y: 0 },
	};

	const renderProject = () => {
		if (projectKey) {
			const project = projects.find((proj) => proj.key === projectKey);

			if (project) {
				return (
					<motion.section
						className="mt-[0vh] sm:mt-[2vh]"
						initial="hidden"
						animate="visible"
						variants={animationVariants}
						transition={{ duration: 0.5 }}
					>
						<div className="mb-4">
							<h2 className="text-3xl font-bold text-center">
								{project.title}
							</h2>
							<Separator className="w-full max-w-xs mx-auto opacity-50" />
							<div className="flex justify-center mt-4 space-x-4">
								{project.link && (
									<Button
										asChild
										variant="outline"
										className="flex items-center"
									>
										<a
											href={project.link}
											target="_blank"
											rel="noopener noreferrer"
										>
											{(() => {
												const Icon =
													getIcon("FiExternalLink");
												return Icon ? <Icon /> : null;
											})()}
											<span>Visit</span>
										</a>
									</Button>
								)}
								{project.github && (
									<Button
										asChild
										variant="outline"
										className="flex items-center"
									>
										<a
											href={project.github}
											target="_blank"
											rel="noopener noreferrer"
										>
											{(() => {
												const Icon =
													getIcon("FiGithub");
												return Icon ? <Icon /> : null;
											})()}
											<span>Repository</span>
										</a>
									</Button>
								)}
							</div>
						</div>
						<div className="max-w-prose mx-auto mb-6 mt-12">
							<ul className="space-y-4">
								{project.description.map((item, index) => (
									<li
										key={index}
										className="flex items-start gap-3 bg-accent text-white hover:bg-accent-hover p-2 rounded-lg shadow-md"
									>
										<div className="flex-shrink-0 mt-1 place-items-center justify-center">
											{(() => {
												const Icon =
													getIcon("FiArrowRight");
												return Icon ? <Icon /> : null;
											})()}
										</div>
										<p className="text-sm leading-relaxed">
											{item}
										</p>
									</li>
								))}
							</ul>
						</div>
						<div className="max-w-prose mx-auto mb-6 text-center mt-8">
							<h3 className="text-xl font-bold mb-4">
								Technologies Used
							</h3>
							<div className="flex flex-wrap gap-4 justify-center">
								{project.technologies.stack.map(
									(tech, index) => {
										const Icon = getIcon(
											project.technologies.icons[index],
										);
										return (
											<div
												key={index}
												className="flex items-center space-x-2 p-2 bg-third text-third-foreground rounded-md shadow"
											>
												{Icon && <Icon />}
												<span className="font-semibold text-sm">
													{tech}
												</span>
											</div>
										);
									},
								)}
							</div>
						</div>
						<Carousel
							setApi={setApi}
							className="w-full max-w-3xl mx-auto"
						>
							<CarouselContent>
								{project.images?.map((image, index) => (
									<CarouselItem key={index}>
										<div className="p-4 relative w-full h-0 pb-[56.25%]">
											<Image
												src={image}
												alt={`Project ${project.title} Slide ${index + 1}`}
												className="rounded-lg shadow-md object-cover"
												fill
												priority={index === 0} // Optional: Preload the first image
											/>
										</div>
									</CarouselItem>
								))}
							</CarouselContent>
							<CarouselPrevious className="absolute top-1/2 m-2 p-2 rounded-full shadow-lg hidden sm:block transform -translate-y-1/2 bg-third " />
							<CarouselNext className="absolute top-1/2 m-2 p-2 rounded-full shadow-lg hidden sm:block transform -translate-y-1/2 bg-third " />
						</Carousel>
						<div className="flex justify-center mt-2 space-x-2">
							{Array.from({ length: count }).map((_, index) => (
								<button
									key={index}
									onClick={() => goToSlide(index)}
									className={`w-3 h-3 rounded-full ${
										current === index
											? "bg-clickable hover:bg-clickable-hover"
											: "bg-text-muted"
									}`}
								/>
							))}
						</div>
					</motion.section>
				);
			}
		}

		return (
			<motion.div
				initial="hidden"
				animate="visible"
				variants={animationVariants}
				transition={{ duration: 0.5 }}
				className="flex flex-col items-center mt-[8vh] sm:mt-[15vh] space-y-4"
			>
				<h1 className="text-4xl font-extrabold text-center">
					My Public Work
				</h1>
				<p className="text-sm text-text-muted text-center max-w-prose">
					Explore my projects below. Select a project to view more
					details:
				</p>
				<Separator className="w-full max-w-xs mx-auto mb-8 opacity-50" />
				<div className="flex flex-col sm:flex-row items-center justify-center gap-4">
					{projects.map((project, index) => (
						<React.Fragment key={project.key}>
							<Button variant="outline" asChild>
								<a
									href={`/work?p=${encodeURIComponent(
										project.key,
									)}`}
								>
									{project.title}
								</a>
							</Button>
							{index < projects.length - 1 && (
								<>
									<Separator
										orientation="horizontal"
										className="block sm:hidden w-6 h-[1px] bg-scrollbar-thumb"
									/>
									<Separator
										orientation="vertical"
										className="hidden sm:block w-[1px] h-6 bg-scrollbar-thumb"
									/>
								</>
							)}
						</React.Fragment>
					))}
				</div>
			</motion.div>
		);
	};

	return (
		<div className="container mx-auto py-6 px-4 bg-primary text-text">
			{renderProject()}
		</div>
	);
}

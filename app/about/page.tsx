"use client";

import React from "react";

import { motion } from "framer-motion";
import { useSearchParams } from "next/navigation";

import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";

import { getIcon } from "@/hooks/getIcon";

import data from "@/data/data.json";

export default function AboutPage() {
	const { experiences, education, hobbies, skills } = data.about;
	const searchParams = useSearchParams();
	const section = searchParams.get("s") || "intro";

	const animationVariants = {
		hidden: { opacity: 0, y: 50 },
		visible: { opacity: 1, y: 0 },
	};

	const renderSection = () => {
		switch (section) {
			case "education":
				return (
					<motion.section
						id="education"
						className="space-y-8 mt-[0vh] sm:mt-[7vh] flex flex-col items-center"
						initial="hidden"
						animate="visible"
						variants={animationVariants}
						transition={{ duration: 0.5 }}
					>
						<div className="text-center">
							<h2 className="text-3xl font-bold text-highlight mb-4">
								Education
							</h2>
							<Separator className="w-full max-w-xs mx-auto mb-8 opacity-50" />
						</div>
						<div className="space-y-6 w-full flex flex-col items-center">
							{education.map((edu, index) => (
								<div
									key={index}
									className="p-6
                   rounded-lg
                   bg-secondary
                   text-text
                   shadow
                   border-l-4
                   border-accent
                   w-full
                   sm:w-3/4
                   lg:w-1/2"
								>
									<h3 className="text-xl font-semibold text-highlight mb-1">
										{edu.degree}
									</h3>
									<p className="text-muted mb-2 italic">
										{edu.institution}
									</p>
									<p className="text-muted">{edu.date}</p>
								</div>
							))}
						</div>
					</motion.section>
				);
			case "experience":
				return (
					<motion.section
						id="experience"
						className="space-y-8 mt-[0vh] sm:mt-[7vh]"
						initial="hidden"
						animate="visible"
						variants={animationVariants}
						transition={{ duration: 0.5 }}
					>
						<div>
							<h2 className="text-3xl font-bold text-highlight mb-4 text-center">
								Experience
							</h2>
							<Separator className="w-full max-w-xs mx-auto mb-8 opacity-50" />
						</div>
						<div className="space-y-6 w-full flex flex-col items-center">
							{experiences.map((exp, index) => (
								<div
									key={index}
									className="p-6 rounded-lg bg-secondary text-secondary-foreground shadow border-l-4 border-accent  w-full sm:w-3/4 lg:w-2/3"
								>
									<p className="text-sm text-muted">
										{exp.date}
									</p>
									<h3 className="text-xl font-semibold text-highlight">
										{exp.title}
									</h3>
									<p className="text-sm text-muted italic">
										{exp.company}
									</p>
									<ul className="mt-2 text-text list-disc list-inside">
										{exp.description.map((item, i) => (
											<li key={i}>{item}</li>
										))}
									</ul>
								</div>
							))}
						</div>
					</motion.section>
				);
			case "skills":
				return (
					<motion.section
						id="skills"
						className="space-y-8 mt-[0vh] sm:mt-[7vh]"
						initial="hidden"
						animate="visible"
						variants={animationVariants}
						transition={{ duration: 0.5 }}
					>
						<div>
							<h2 className="text-3xl font-bold text-highlight mb-4 text-center">
								Skills
							</h2>
							<Separator className="w-full max-w-xs mx-auto mb-8 opacity-50" />
						</div>
						<div className="space-y-6">
							<div>
								<h3 className="text-xl font-semibold text-highlight mb-4 text-center mt-12">
									Technical Skills
								</h3>
								<div className="flex flex-wrap gap-4 justify-center">
									{skills.technical.map((skill, index) => {
										const Icon = getIcon(skill.icon);
										return (
											<div
												key={index}
												className="flex items-center space-x-2 p-2 bg-accent text-white rounded-md shadow hover:bg-accent-hover transition h-min w-min whitespace-nowrap "
											>
												{Icon && (
													<Icon
														aria-label={skill.name}
													/>
												)}
												<span className="font-semibold text-sm flex-grow ">
													{skill.name}
												</span>
											</div>
										);
									})}
								</div>
							</div>

							<div>
								<h3 className="text-xl font-semibold text-highlight mb-4 text-center mt-14">
									Social Skills
								</h3>
								<div className="flex flex-wrap gap-4 justify-center">
									{skills.social.map((skill, index) => {
										const Icon = getIcon(skill.icon);
										return (
											<div
												key={index}
												className="flex items-center  space-x-2 p-2 bg-accent text-white rounded-md shadow hover:bg-accent-hover transition h-min w-min whitespace-nowrap"
											>
												{Icon && (
													<Icon
														aria-label={skill.name}
													/>
												)}
												<span className="font-semibold text-sm flex-grow">
													{skill.name}
												</span>
											</div>
										);
									})}
								</div>
							</div>
						</div>
					</motion.section>
				);
			case "hobbies":
				return (
					<motion.section
						id="hobbies"
						className="space-y-8 mt-[0vh] sm:mt-[7vh]"
						initial="hidden"
						animate="visible"
						variants={animationVariants}
						transition={{ duration: 0.5 }}
					>
						<div>
							<h2 className="text-3xl font-bold text-highlight mb-4 text-center">
								Hobbies
							</h2>
							<Separator className="w-full max-w-xs mx-auto mb-8 opacity-50" />
						</div>
						<ul className="flex flex-wrap gap-4 justify-center">
							{hobbies.map((hobby, index) => {
								const Icon = getIcon(hobby.icon);
								return (
									<li
										key={index}
										className="flex items-center space-x-2 p-2 rounded-lg bg-third text-third-foreground font-semibold shadow h-min w-min whitespace-nowrap"
									>
										{Icon && (
											<Icon aria-label={hobby.name} />
										)}
										<span>{hobby.name}</span>
									</li>
								);
							})}
						</ul>
					</motion.section>
				);

			default:
				return (
					<motion.div
						initial="hidden"
						animate="visible"
						variants={animationVariants}
						transition={{ duration: 0.5 }}
						className="flex flex-col items-center mt-[3vh] sm:mt-[7vh] space-y-4"
					>
						<h1 className="text-4xl font-extrabold text-center text-highlight">
							About Me
						</h1>
						<p className="text-sm text-muted text-center max-w-prose">
							Explore my journey, including my education,
							professional experiences, technical skills, and
							hobbies. Select a section below:
						</p>
						<Separator className="w-full max-w-xs mx-auto mb-8 opacity-50" />
						<div className="flex flex-col sm:flex-row items-center justify-center gap-4">
							{[
								"education",
								"experience",
								"skills",
								"hobbies",
							].map((sectionItem, index) => (
								<Button key={index} variant="outline" asChild>
									<a href={`/about?s=${sectionItem}`}>
										{sectionItem.charAt(0).toUpperCase() +
											sectionItem.slice(1)}
									</a>
								</Button>
							))}
						</div>
					</motion.div>
				);
		}
	};

	return (
		<div className="container mx-auto py-6 px-4 bg-primary text-text">
			{renderSection()}
		</div>
	);
}

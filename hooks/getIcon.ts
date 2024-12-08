import React from "react";

import { SupabaseIcon } from "@/svgs/supabase";
import {
	FiMessageCircle,
	FiZap,
	FiClock,
	FiHeart,
	FiUsers,
	FiRefreshCw,
	FiArrowRight,
	FiSearch,
	FiUser,
	FiExternalLink,
	FiGithub,
} from "react-icons/fi";

import {
	SiReact,
	SiTypescript,
	SiJavascript,
	SiNextdotjs,
	SiCss3,
	SiSass,
	SiHtml5,
	SiBootstrap,
	SiTailwindcss,
	SiPostgresql,
	SiMysql,
	SiMongodb,
	SiGit,
	SiPostman,
	SiGraphql,
	SiC,
	SiCplusplus,
	SiWordpress,
} from "react-icons/si";

import {
	FaFutbol,
	FaTableTennis,
	FaBook,
	FaGamepad,
	FaLandmark,
} from "react-icons/fa";

export const ICON_MAP: Record<string, React.ComponentType> = {
	SiReact,
	SiTypescript,
	SiJavascript,
	SiNextdotjs,
	SiCss3,
	SiSass,
	SiHtml5,
	SiBootstrap,
	SiTailwindcss,
	SiPostgresql,
	SiMysql,
	SiMongodb,
	SiGit,
	SiPostman,
	SiGraphql,
	SiC,
	SiCplusplus,
	SiWordpress,
	SupabaseIcon,
	FiMessageCircle,
	FiZap,
	FiClock,
	FiHeart,
	FiUsers,
	FiRefreshCw,
	FiArrowRight,
	FiSearch,
	FiUser,
	FiExternalLink,
	FiGithub,
	FaFutbol,
	FaTableTennis,
	FaBook,
	FaGamepad,
	FaLandmark,
};

export const getIcon = (iconName: string): React.ComponentType | null => {
	const icon = ICON_MAP[iconName] || null;
	if (!icon) {
		console.warn(`Icon "${iconName}" not found in ICON_MAP.`);
	}
	return icon;
};

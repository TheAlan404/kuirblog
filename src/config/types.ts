import { MantineColor, MantineTheme } from "@mantine/core";
import { GiscusProps } from "@giscus/react";
import React from "react";

export interface HeaderLink {
	label: string;
	link: string;
	icon?: React.ReactNode;
	activeLinks: string[];
}

export interface Settings {
	applicationName: string;
	headerSize: number;
	enablePageProgress: boolean;
	headerLinks: HeaderLink[];
	giscus?: GiscusProps;
	socialLinks?: {
		icon?: React.ReactNode,
		label: string,
		link: string,
		color: MantineColor,
	}[];
}

export interface Route {
	name: string;
	href: string;
}

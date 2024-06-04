import { IconBrandDiscord, IconBrandReddit, IconHome, IconNews } from "@tabler/icons-react";
import Routes from "src/config/routes";
import { Settings } from "src/config/types";

const settings: Settings = {
	applicationName: ".kuir",
	headerSize: 60,
	enablePageProgress: true,
	headerLinks: [
		{
			link: Routes.home.href,
			label: Routes.home.name,
			activeLinks: [Routes.home.href],
			icon: <IconHome />,
		},
		{
			link: Routes.blog.href,
			label: Routes.blog.name,
			activeLinks: [Routes.blog.href, Routes.blogPost.href],
			icon: <IconNews />,
		},
	],
	socialLinks: [
		{
			icon: <IconBrandReddit />,
			label: "r/kuir",
			link: "https://www.reddit.com/r/kuir/",
			color: "gray",
		},
		{
			icon: <IconBrandDiscord />,
			label: "Discord",
			link: "https://discord.gg/kuir/",
			color: "gray",
		},
	],
};

export default settings;

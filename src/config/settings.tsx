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
			link: Routes.allPages.href,
			label: Routes.allPages.name,
			activeLinks: [Routes.allPages.href, Routes.wikiPage.href],
			icon: <IconNews />,
		},
	],
	socialLinks: [
		
	],
};

export default settings;

import { Route } from "src/config/types";

const routes = {
	home: {
		name: "Anasayfa",
		href: "/",
	},
	allPages: {
		name: "Hepsi",
		href: "/all",
	},
	wikiPage: {
		name: "Wiki Page",
		href: "/w/[...slug]",
	},
	contact: {
		name: "İletişim",
		href: "/contact",
	},
} as const;

export default routes;

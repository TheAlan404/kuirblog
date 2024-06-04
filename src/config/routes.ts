import { Route } from "src/config/types";

const routes = {
	home: {
		name: "Anasayfa",
		href: "/",
	},
	blog: {
		name: "Blog",
		href: "/blog",
	},
	blogPost: {
		name: "Post",
		href: "/posts/[slug]",
	},
	contact: {
		name: "İletişim",
		href: "/contact",
	},
} as const;

export default routes;

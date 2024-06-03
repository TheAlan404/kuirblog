import { Route } from "src/config/types";

const routes: Record<string, Route> = {
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
};

export default routes;

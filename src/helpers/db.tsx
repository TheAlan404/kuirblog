import fs from "fs";
import { sync } from "glob";
import matter from "gray-matter";
import normalize from "normalize-path";
import { join } from "path";
import { WikiPage } from "./wiki";

const CONTENT_PATH = join(process.cwd(), "content");
const POSTS_PATH = join(CONTENT_PATH, "w");

export const getWikiPagePaths = (): string[][] => {
	const paths = sync(normalize(`${POSTS_PATH}/*.mdx`));

	return paths.map((filePath) => {
		const parts = filePath.split(/[\/\\]/);
		parts[parts.length - 1] = parts[parts.length - 1].split(".")[0];
		let idx = parts.indexOf("w");
		return parts.slice(idx + 1, parts.length);
	});
};

export const getWikiPageFromPath = (path: string[]): WikiPage => {
	const postPath = join(
		POSTS_PATH,
		...path.slice(0, path.length - 1),
		`${path[path.length - 1]}.mdx`
	);
	const source = fs.readFileSync(postPath);
	const { content, data } = matter(source);

	return {
		content,
		meta: {
			path,
			excerpt: data.excerpt ?? "",
			title: data.title ?? path.join("/"),
			tags: (data.tags ?? []).sort(),
			date: (data.date ?? new Date()).toString(),
			image: data.image ?? null,
			author: data.author ?? null,
			category: data.category ?? null,
		},
	};
};

export const getAllWikiPages = () => {
	const posts = getWikiPagePaths()
		.map((slug) => getWikiPageFromPath(slug))
		.sort((a, b) => {
			if (a.meta.date > b.meta.date) return 1;
			if (a.meta.date < b.meta.date) return -1;
			return 0;
		})
		.reverse();
	return posts;
};

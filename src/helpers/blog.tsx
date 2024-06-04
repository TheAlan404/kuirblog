import fs from "fs";
import { sync } from "glob";
import matter from "gray-matter";
import normalize from "normalize-path";
import path from "path";
import { Post } from "./types";

const CONTENT_PATH = path.join(process.cwd(), "content");
const POSTS_PATH = path.join(CONTENT_PATH, "posts");

export const getSlugs = (): string[] => {
	const paths = sync(normalize(`${POSTS_PATH}/*.mdx`));

	return paths.map((filePath) => {
		const parts = filePath.split(/[\/\\]/);
		const fileName = parts[parts.length - 1];
		const [slug] = fileName.split(".");
		return slug;
	});
};

export const getPostFromSlug = (slug: string): Post => {
	const postPath = path.join(POSTS_PATH, `${slug}.mdx`);
	const source = fs.readFileSync(postPath);
	const { content, data } = matter(source);

	return {
		content,
		meta: {
			slug,
			excerpt: data.excerpt ?? "",
			title: data.title ?? slug,
			tags: (data.tags ?? []).sort(),
			date: (data.date ?? new Date()).toString(),
			image: data.image ?? null,
			author: data.author ?? null,
			category: data.category ?? null,
		},
	};
};

export const getAllPosts = () => {
	const posts = getSlugs()
		.map((slug) => getPostFromSlug(slug))
		.sort((a, b) => {
			if (a.meta.date > b.meta.date) return 1;
			if (a.meta.date < b.meta.date) return -1;
			return 0;
		})
		.reverse();
	return posts;
};

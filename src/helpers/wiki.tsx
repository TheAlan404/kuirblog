import { MDXRemoteSerializeResult } from "next-mdx-remote";
import { serialize } from "next-mdx-remote/serialize";
import { getWikiPageFromPath } from "./db";
import rehypeSlug from "rehype-slug";
import rehypeAutolinkHeadings from "rehype-autolink-headings";

export interface WikiPage {
	content: string;
	meta: WikiPageMetadata;
}

export interface WikiPageMetadata {
	path: string[];
	excerpt: string;
	title: string;
	tags: string[];
	date: string;
	category: string;
	image?: string;
	author: {
		name: string;
		image: string;
	};
}

export interface WikiPageProps {
	source: MDXRemoteSerializeResult;
	meta: WikiPageMetadata;
}

export const renderWikiPage = async (path: string[]): Promise<WikiPageProps> => {
	const { content, meta } = getWikiPageFromPath(path);
	const source = await serialize(content, {
		mdxOptions: {
			rehypePlugins: [
				rehypeSlug,
				[rehypeAutolinkHeadings, { behavior: "wrap" }],
			],
		},
	});

	return {
		source,
		meta,
	};
};


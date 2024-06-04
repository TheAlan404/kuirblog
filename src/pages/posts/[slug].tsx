/* eslint-disable react/jsx-props-no-spreading */
import React from "react";
import type { GetStaticPaths, GetStaticProps } from "next";
import { MDXRemote, MDXRemoteSerializeResult } from "next-mdx-remote";
import { serialize } from "next-mdx-remote/serialize";
import { NextSeo } from "next-seo";
import Link from "next/link";
import NextImage from "next/image";
import {
	ActionIcon,
	Anchor,
	Code,
	Group,
	Stack,
	Table,
	Title,
	Image,
	Box,
	Tooltip,
	ImageProps,
	Avatar,
	Text,
} from "@mantine/core";
import { IconArrowNarrowLeft } from "@tabler/icons-react";
import rehypeAutolinkHeadings from "rehype-autolink-headings";
import rehypeSlug from "rehype-slug";
import { GiscusComments, YouTubeEmbed } from "src/components/index";
import { getPostFromSlug, getSlugs } from "src/helpers/blog";
import Routes from "src/config/routes";
import { PostMeta } from "@/helpers/types";

interface MDXPost {
	source: MDXRemoteSerializeResult<Record<string, unknown>>;
	meta: PostMeta;
}

const components = {
	img: (props: ImageProps) => (
		<Image
			{...props}
			radius="md"
		/>
	),
	YouTube: YouTubeEmbed,
	ReactTable: Table,
	code: (props: any) => <Code {...props} />,
	h1: (props: any) => <Title order={1} {...props} />,
	h2: (props: any) => <Title order={2} {...props} />,
	h3: (props: any) => <Title order={3} {...props} />,
	h4: (props: any) => <Title order={4} {...props} />,
	h5: (props: any) => <Title order={5} {...props} />,
	h6: (props: any) => <Title order={6} {...props} />,
	a: (props: any) => <Anchor {...props} />,
};

export default function PostPage({ post }: { post: MDXPost }) {
	return (
		<>
			<NextSeo
				title={post.meta.title}
				description={post.meta.excerpt}
				openGraph={{
					title: post.meta.title,
					description: post.meta.excerpt,
					type: "article",
					article: {
						tags: post.meta.tags,
						authors: [post.meta.author.name],
						publishedTime: post.meta.date,
					},
					locale: "tr_TR",
					images: post.meta.image ? [
						{
							url: post.meta.image,
						}
					] : undefined,
				}}
			/>

			<Stack>
				{post.meta.image && (
					<Image
						style={{ flex: "unset" }}
						h="40vh"
						w="100%"
						fit="cover"
						radius="md"
						src={post.meta.image}
						alt={`${post.meta.title} image`}
					/>
				)}

				<Group align="center" wrap="nowrap">
					<Tooltip label="Blog'a geri dön">
						<ActionIcon
							variant="light"
							component={Link}
							href={Routes.blog.href}
							visibleFrom="sm"
						>
							<IconArrowNarrowLeft />
						</ActionIcon>
					</Tooltip>
					<Title order={2}>{post.meta.title}</Title>
				</Group>

				<Group justify="space-between" pb="xl">
					<Stack gap={0}>
						<Text c="dimmed">Yazar:</Text>
						<Group>
							<Avatar size="sm" radius="xl">
								<Image
									component={NextImage}
									alt={`${post.meta.author.name} photo`}
									src={post.meta.author.image}
									layout="fill"
									objectFit="cover"
									sizes="10vw"
								/>
							</Avatar>
								<Text size="sm" inline>
									{post.meta.author.name}
								</Text>
						</Group>
					</Stack>
					<Stack ta="end" gap={0}>
						<Text c="dimmed">Tarih:</Text>
						<Text>
							{new Date(post.meta.date).toLocaleDateString()}
						</Text>
					</Stack>
				</Group>

				<MDXRemote {...post.source} components={components} />

				{/* <GiscusComments /> */}
			</Stack>
		</>
	);
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
	const { slug } = params as { slug: string };
	const { content, meta } = getPostFromSlug(slug);
	const mdxSource = await serialize(content, {
		mdxOptions: {
			rehypePlugins: [
				rehypeSlug,
				//[rehypeAutolinkHeadings, { behavior: "wrap" }],
			],
		},
	});

	return { props: { post: { source: mdxSource, meta } } };
};

export const getStaticPaths: GetStaticPaths = async () => {
	const paths = getSlugs().map((slug) => ({ params: { slug } }));

	return {
		paths,
		fallback: false,
	};
};

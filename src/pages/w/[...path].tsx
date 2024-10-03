import React from "react";
import type { GetStaticPaths, GetStaticProps } from "next";
import { MDXRemote } from "next-mdx-remote";
import { NextSeo } from "next-seo";
import Link from "next/link";
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
import { YouTubeEmbed } from "src/components/index";
import Routes from "src/config/routes";
import { renderWikiPage, WikiPageProps } from "@/helpers/wiki";
import { getAllWikiPages, getWikiPagePaths } from "@/helpers/db";

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

export default function WikiPage({ meta, source }: WikiPageProps) {
	return (
		<>
			<NextSeo
				title={meta.title}
				description={meta.excerpt}
				openGraph={{
					title: meta.title,
					description: meta.excerpt,
					type: "article",
					article: {
						tags: meta.tags,
						authors: [meta.author.name],
						publishedTime: meta.date,
					},
					locale: "tr_TR",
					images: meta.image ? [
						{
							url: meta.image,
						}
					] : undefined,
				}}
			/>

			<Stack>
				{/* meta.image && (
					<Image
						className="unsetflex"
						h="40vh"
						w="100%"
						fit="cover"
						radius="md"
						src={meta.image}
						alt={`${meta.title} image`}
					/>
				) */}

				<Group align="center" wrap="nowrap">
					<Tooltip label="Blog'a geri dön">
						<ActionIcon
							variant="light"
							component={Link}
							href={Routes.allPages.href}
							visibleFrom="sm"
						>
							<IconArrowNarrowLeft />
						</ActionIcon>
					</Tooltip>
					<Title order={2}>{meta.title}</Title>
				</Group>

				{/* <Group justify="space-between" pb="xl">
					<Stack gap={0}>
						<Text c="dimmed">Yazar:</Text>
						<Group>
							<Avatar
								size="sm"
								radius="xl"
								src={meta.author.image}
								alt={meta.author.name}
							/>
							<Text size="sm" inline>
								{meta.author.name}
							</Text>
						</Group>
					</Stack>
					<Stack ta="end" gap={0}>
						<Text c="dimmed">Tarih:</Text>
						<Text>
							{new Date(meta.date).toLocaleDateString()}
						</Text>
					</Stack>
				</Group> */}

				<MDXRemote {...source} components={components} />

				{/* <GiscusComments /> */}
			</Stack>
		</>
	);
}

export const getStaticProps: GetStaticProps<WikiPageProps> = async ({ params }) => {
	const { path } = params as { path: string[] };

	const props = await renderWikiPage(path);
	return { props };
};

export const getStaticPaths: GetStaticPaths = async () => {
	const paths = getWikiPagePaths().map((path) => ({ params: { path } }));

	return {
		paths,
		fallback: false,
	};
};

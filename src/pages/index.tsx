import React from "react";
import { NextSeo } from "next-seo";
import { Button, Divider, Image, SimpleGrid, Space, Stack, Text, Title } from "@mantine/core";
import { GetStaticProps } from "next";
import { getAllPosts } from "@/helpers/blog";
import { PostMeta } from "@/helpers/types";
import { ArticleCard } from "../components";
import { IconArrowNarrowRight } from "@tabler/icons-react";
import Link from "next/link";
import routes from "@/config/routes";

export const getStaticProps: GetStaticProps = async () => {
	const posts = getAllPosts().map((post) => post.meta);

	return {
		props: {
			posts,
		},
	};
};

export default function Home({ posts }: { posts: PostMeta[] }) {
	return (
		<Stack>
			<NextSeo title="Anasayfa" description=".kuir blogunun ana sayfası" />
			<Title order={2}>.kuir Blog'a Hoş Geldin!</Title>

			<Stack align="center">
				<Image
					className="unsetflex"
					src="/images/rkuirbanner.png"
					radius="md"
					h="40vh"
				/>

				<Text>
					Lorem ipsum dolor sit amet consectetur adipisicing elit.
					Fugit consectetur vero voluptate rem quidem consequatur veniam repellat debitis,
					quam itaque in cumque sed asperiores accusantium, nisi magnam facere, doloribus porro?
					Lorem ipsum dolor sit amet consectetur adipisicing elit.
					Fugit consectetur vero voluptate rem quidem consequatur veniam repellat debitis,
					quam itaque in cumque sed asperiores accusantium, nisi magnam facere, doloribus porro?
				</Text>

				<Divider mt="xl" pt="xl" w="80%" label="Postlarımız" />

				<SimpleGrid cols={{ base: 1, md: 3 }}>
					{(posts || []).slice(0, 3).map((post) => (
						<ArticleCard
							key={post.slug}
							{...post}
						/>
					))}
				</SimpleGrid>

				<Button
					variant="light"
					fullWidth
					color="blue"
					rightSection={<IconArrowNarrowRight />}
					component={Link}
					href={routes.blog.href}
				>
					Bütün Postlara Bak
				</Button>
			</Stack>
		</Stack>
	);
}


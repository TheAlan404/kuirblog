import { useMemo, useState } from "react";

import type { GetStaticProps } from "next";
import { NextSeo } from "next-seo";

import { ActionIcon, Grid, SimpleGrid, Stack, TextInput } from "@mantine/core";
import { useDebouncedValue } from "@mantine/hooks";

import { IconSearch, IconX } from "@tabler/icons-react";

import { ArticleCard } from "src/components/index";

import { PostMeta, getAllPosts } from "src/helpers/blog";

function Blog({ posts }: { posts: PostMeta[] }) {
	const [value, setValue] = useState("");
	const [debounced] = useDebouncedValue(value, 200, { leading: true });

	/* Filtering the posts based on the search input. */
	const filtered = useMemo(() => {
		if (debounced)
			return posts.filter(
				(post) =>
					post.title
						.toLocaleLowerCase()
						.includes(debounced.toLocaleLowerCase()) ||
					post.category
						.toLocaleLowerCase()
						.includes(debounced.toLocaleLowerCase())
			);

		return posts;
	}, [debounced, posts]);

	const clearFilter = () => {
		setValue("");
	};

	return (
		<>
			<NextSeo title="Blog Posts" description="List of blog posts" />
			<Stack>
				<TextInput
					placeholder="Search..."
					value={value}
					leftSection={<IconSearch />}
					rightSection={
						debounced && (
							<ActionIcon onClick={clearFilter}>
								<IconX />
							</ActionIcon>
						)
					}
					onChange={(event) => setValue(event.currentTarget.value)}
				/>

				<SimpleGrid>
					{filtered.map((post) => (
						<ArticleCard
							key={post.slug}
							link={`/posts/${post.slug}`}
							title={post.title}
							description={post.excerpt}
							author={post.author}
							image={post.image}
							category={post.category}
						/>
					))}
				</SimpleGrid>
			</Stack>
		</>
	);
}

export const getStaticProps: GetStaticProps = async () => {
	const posts = getAllPosts().map((post) => post.meta);

	return {
		props: {
			posts,
		},
	};
};

export default Blog;

import { useMemo, useState } from "react";
import { GetStaticProps } from "next";
import { NextSeo } from "next-seo";
import { ActionIcon, Grid, SimpleGrid, Stack, Text, TextInput, Title } from "@mantine/core";
import { useDebouncedValue } from "@mantine/hooks";
import { IconSearch, IconX } from "@tabler/icons-react";
import { ArticleCard } from "src/components/index";
import { getAllPosts } from "src/helpers/blog";
import { PostMeta } from "@/helpers/types";

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
			<NextSeo title="Blog Yazıları" description="Blog yazılarının listesi" />
			<Stack>
				<Stack ta="center" align="center">
					<Title>
						.kuir Blog
					</Title>

					<Text>
						miyav
					</Text>
				</Stack>

				<TextInput
					placeholder="Ara..."
					value={value}
					leftSection={<IconSearch />}
					rightSection={
						debounced && (
							<ActionIcon
								onClick={clearFilter}
								variant="light"
							>
								<IconX />
							</ActionIcon>
						)
					}
					onChange={(event) => setValue(event.currentTarget.value)}
				/>

				<SimpleGrid cols={{ sm: 3, base: 1 }}>
					{filtered.map((post) => (
						<ArticleCard
							key={post.slug}
							{...post}
						/>
					))}
				</SimpleGrid>

				{!filtered.length && (
					<Stack>
						<Text>
							whoops hiçbişi bulamadık :(
						</Text>
					</Stack>
				)}
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

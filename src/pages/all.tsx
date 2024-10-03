import React, { useMemo, useState } from "react";
import { GetStaticProps } from "next";
import { NextSeo } from "next-seo";
import { ActionIcon, Grid, SimpleGrid, Stack, Text, TextInput, Title } from "@mantine/core";
import { useDebouncedValue } from "@mantine/hooks";
import { IconSearch, IconX } from "@tabler/icons-react";
import { ArticleCard } from "src/components/index";
import { getAllWikiPages } from "@/helpers/db";
import { WikiPageMetadata } from "@/helpers/wiki";

type AllProps = { wikiPages: WikiPageMetadata[] };

function All({ wikiPages }: AllProps) {
	const [value, setValue] = useState("");
	const [debounced] = useDebouncedValue(value, 200, { leading: true });

	/* Filtering the posts based on the search input. */
	const filtered = useMemo(() => {
		if (debounced)
			return wikiPages.filter(
				(p) =>
					p.title
						.toLocaleLowerCase()
						.includes(debounced.toLocaleLowerCase()) ||
					p.category
						.toLocaleLowerCase()
						.includes(debounced.toLocaleLowerCase())
			);

		return wikiPages;
	}, [debounced, wikiPages]);

	const clearFilter = () => {
		setValue("");
	};

	return (
		<>
			<NextSeo title="Blog Yazıları" description="Blog yazılarının listesi" />
			<Stack>
				<Stack ta="center" align="center">
					<Title>
						Wiki
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
					{filtered.map((page) => (
						<ArticleCard
							key={page.path.join("-")}
							{...page}
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

export const getStaticProps: GetStaticProps<AllProps> = async () => {
	const wikiPages = getAllWikiPages().map((post) => post.meta);

	return {
		props: { wikiPages },
	};
};

export default All;

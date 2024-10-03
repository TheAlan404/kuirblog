import React from "react";
import { NextSeo } from "next-seo";
import { Button, Divider, Image, SimpleGrid, Space, Stack, Text, Title } from "@mantine/core";
import { GetStaticProps } from "next";
import { getAllWikiPages } from "@/helpers/db";
import { ArticleCard } from "../components";
import { IconArrowNarrowRight } from "@tabler/icons-react";
import Link from "next/link";
import routes from "@/config/routes";
import { WikiPageMetadata } from "@/helpers/wiki";

type HomeProps = { wikiPages: WikiPageMetadata[] };

export const getStaticProps: GetStaticProps<HomeProps> = async () => {
	const wikiPages = getAllWikiPages()
		.map((post) => post.meta)
		.slice(0, 3);

	return {
		props: {
			wikiPages,
		},
	};
};

export default function Home({ wikiPages }: HomeProps) {
	return (
		<Stack>
			<NextSeo title="Anasayfa" description=".kuir blogunun ana sayfası" />
			<Title order={2}>Wikiye Hoş Geldin!</Title>

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
					{(wikiPages || []).slice(0, 3).map((post) => (
						<ArticleCard
							key={post.path.join("-")}
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
					href={routes.allPages.href}
				>
					Bütün Postlara Bak
				</Button>
			</Stack>
		</Stack>
	);
}


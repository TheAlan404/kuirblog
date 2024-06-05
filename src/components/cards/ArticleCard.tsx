import React from "react";
import NextImage from "next/image";
import Link from "next/link";
import {
	Avatar,
	Badge,
	Card,
	Group,
	Text,
	Image,
	Stack,
} from "@mantine/core";
import { PostMeta } from "@/helpers/types";

export default function ArticleCard({
	image,
	title,
	author,
	category,
	date,
	excerpt,
	slug,
	tags,
}: PostMeta) {
	const link = `/posts/${slug}`;

	return (
		<Card
			withBorder
			radius="md"
			padding="md"
			shadow="md"
			component={Link}
			href={link}
			className="articleCard"
		>
			{image && (
				<Card.Section>
					<Image
						style={{ flex: "unset" }}
						alt={`${title} cover image`}
						src={image}
						h="7em"
					/>
				</Card.Section>
			)}

			<Stack justify="space-between" h="100%" pt="md" gap="sm">
				<Stack gap={0}>
					<Text fw="bolder">
						{title}
					</Text>

					<Text size="sm" c="dimmed" lineClamp={4}>
						{excerpt}
					</Text>
				</Stack>

				<Group justify="space-between">
					<Group>
						<Avatar
							src={author.image}
							size="sm"
							radius="xl"
						/>
						<Text size="sm" inline>
							{author.name}
						</Text>
					</Group>
					{category && (
						<Badge variant="light">
							{category}
						</Badge>
					)}
				</Group>
			</Stack>
		</Card>
	);
}

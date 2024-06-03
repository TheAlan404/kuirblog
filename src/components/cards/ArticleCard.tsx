import React from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Anchor,
  Avatar,
  Badge,
  Card,
  CardSection,
  Center,
  Group,
  Text,
} from "@mantine/core";

export interface ArticleCardProps {
  image?: string;
  link: string;
  title: string;
  description: string;
  category?: string;
  author: {
    name: string;
    image: string;
  };
}

export default function ArticleCard({
  image,
  link,
  title,
  description,
  author,
  category,
}: ArticleCardProps) {
  return (
    <Card withBorder radius="md">
      {image && (
        <Card.Section>
          <Link href={link} passHref>
            <Anchor component="a">
              <Image
                alt={`${title} cover image`}
                src={image}
                layout="fill"
                objectFit="cover"
                sizes="50vw"
                priority
              />
            </Anchor>
          </Link>
        </Card.Section>
      )}

      {category && (
        <Badge variant="filled">
          {category}
        </Badge>
      )}

      <Link href={link} passHref>
        <Text fw={500} component="a">
          {title}
        </Text>
      </Link>

      <Text size="sm" c="dimmed" lineClamp={4}>
        {description}
      </Text>
      <Group justify="space-between">
        <Center>
          <Avatar size={24} radius="xl" mr="xs">
            <Image
              alt={`${author.name} photo`}
              src={author.image}
              layout="fill"
              objectFit="cover"
              sizes="10vw"
            />
          </Avatar>
          <Text size="sm" inline>
            {author.name}
          </Text>
        </Center>
      </Group>
    </Card>
  );
}

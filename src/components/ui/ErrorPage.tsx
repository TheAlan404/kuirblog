import Link from "next/link";

import { Button, Container, Group, Text, Title } from "@mantine/core";

import Routes from "src/config/routes";

export default function ErrorPage({
  errorCode,
  title,
  description,
}: {
  errorCode: number;
  title: string;
  description: string;
}) {
  return (
    <Container>
      <div>{errorCode}</div>
      <Title>{title}</Title>
      <Text
        c="dimmed"
        size="lg"
        ta="center"
      >
        {description}
      </Text>
      <Group justify="center">
        <Link href={Routes.home.href} passHref>
          <Button
            variant="subtle"
            size="md"
            component="a"
            aria-label="return to home page"
          >
            Take me back to home page
          </Button>
        </Link>
      </Group>
    </Container>
  );
}

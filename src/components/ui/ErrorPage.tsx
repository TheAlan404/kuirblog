import Link from "next/link";

import { Button, Container, Group, Stack, Text, Title } from "@mantine/core";

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
			<Stack ta="center" align="center">
				<Text fz={"48"}>{errorCode}</Text>
				<Title>{title}</Title>
				<Text
					c="dimmed"
					size="lg"
				>
					{description}
				</Text>
				<Group justify="center">
					<Button
						variant="light"
						size="md"
						component={Link}
						href={Routes.home.href}
					>
						Anasayfaya geri dön
					</Button>
				</Group>
			</Stack>
		</Container>
	);
}

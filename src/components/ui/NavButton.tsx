import Link from "next/link";
import { useRouter } from "next/router";

import { Anchor, Box, Button, Group, ThemeIcon } from "@mantine/core";
import { HeaderLink } from "src/config/types";

export default function NavButton({
	icon,
	label,
	link,
	activeLinks,
}: HeaderLink) {
	const router = useRouter();
	const isActive = activeLinks.includes(router.pathname);

	return (
		<Button
			variant="light"
			component={Link}
			href={link}
			leftSection={icon}
			color={isActive ? "yellow" : undefined}
		>
			{label}
		</Button>
	);
}

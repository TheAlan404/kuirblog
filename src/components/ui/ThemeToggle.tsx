import React from "react";
import { ActionIcon, Group, useMantineColorScheme } from "@mantine/core";
import { IconMoonStars, IconSun } from "@tabler/icons-react";

export default function ThemeToggle() {
	const { colorScheme, toggleColorScheme } = useMantineColorScheme();

	return (
		<ActionIcon
			variant="light"
			onClick={() => toggleColorScheme()}
			color={colorScheme === "dark" ? "yellow" : "blue"}
			title="Toggle color scheme"
		>
			{colorScheme === "dark" ? <IconSun /> : <IconMoonStars />}
		</ActionIcon>
	);
}

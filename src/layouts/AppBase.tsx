import { ReactNode, useEffect, useState } from "react";
import { useRouter } from "next/router";
import { ActionIcon, AppShell, Avatar, Burger, Button, Container, Group, NavLink, Tooltip } from "@mantine/core";
import settings from "@/config/settings";
import { useDisclosure } from "@mantine/hooks";
import { NavButton, ThemeToggle } from "../components";
import Link from "next/link";
import routes from "@/config/routes";

export default function AppBase({ children }: { children: ReactNode }) {
	const [opened, { close, toggle }] = useDisclosure(false);

	const router = useRouter();

	useEffect(() => {
		router.events.on("routeChangeStart", close);
		return () => {
			router.events.off("routeChangeStart", close);
		};
	}, [router.asPath, router.events]);

	return (
		<AppShell
			padding="md"
			header={{ height: 60 }}
			navbar={{
				width: 300,
				breakpoint: 'sm',
				collapsed: { mobile: !opened, desktop: true },
			}}
		>
			<AppShell.Header>
				<Group justify="space-between" align="center" h="100%" px="sm">
					<Group>
						<Burger
							opened={opened}
							onClick={toggle}
							hiddenFrom="sm"
							size="sm"
						/>

						<Button
							variant="transparent"
							leftSection={(
								<Avatar
									size="sm"
									pos="relative"
									src="/images/mascot.png"
								/>
							)}
							component={Link}
							href={routes.home.href}
						>
							{settings.applicationName}
						</Button>

						<Group visibleFrom="sm">
							{settings.headerLinks.map((link) => (
								<NavButton
									key={link.label}
									{...link}
								/>
							))}
						</Group>
					</Group>

					<Group>
						<Group>
							{settings.socialLinks?.map(({ label, link, icon, color }, i) => (
								<Tooltip key={i} label={label}>
									<ActionIcon
										variant="light"
										color={color}
										component="a"
										href={link}
									>
										{icon}
									</ActionIcon>
								</Tooltip>
							))}
						</Group>
						<ThemeToggle />
					</Group>
				</Group>
			</AppShell.Header>

			<AppShell.Navbar p="md">
				{settings.headerLinks.map((link) => (
					<NavLink
						key={link.link}
						component={Link}
						href={link.link}
						label={link.label}
						leftSection={link.icon}
						variant="light"
						active={link.activeLinks.includes(router.pathname)}
					/>
				))}
			</AppShell.Navbar>

			<AppShell.Main>
				<Container>
					{children}
				</Container>
			</AppShell.Main>
		</AppShell>
	);
}

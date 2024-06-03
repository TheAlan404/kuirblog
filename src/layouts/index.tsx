import { ReactNode, useEffect, useState } from "react";
import { useRouter } from "next/router";
import { AppShell, Burger, Container, Group, NavLink } from "@mantine/core";
import settings from "@/config/settings";
import { useDisclosure } from "@mantine/hooks";
import { NavButton, ThemeToggle } from "../components";
import Link from "next/link";

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
					<Burger
						opened={opened}
						onClick={toggle}
						hiddenFrom="sm"
						size="sm"
					/>
					<Group visibleFrom="sm">
						{settings.headerLinks.map((link) => (
							<NavButton
								key={link.label}
								{...link}
							/>
						))}
					</Group>
					<Group>
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

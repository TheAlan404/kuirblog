import { ReactNode, useEffect, useState } from "react";
import { useRouter } from "next/router";
import { AppShell, Container } from "@mantine/core";
import getHeaderLinks from "src/helpers/header";
import settings from "@/config/settings";
import { useDisclosure } from "@mantine/hooks";

export default function AppBase({ children }: { children: ReactNode }) {
	const [open, { close }] = useDisclosure(false);

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
			header={{ height: settings.headerSize }}
		>
			<AppShell.Header>
				
			</AppShell.Header>
			<AppShell.Main>
				<Container>
					{children}
				</Container>
			</AppShell.Main>
		</AppShell>
	);
}

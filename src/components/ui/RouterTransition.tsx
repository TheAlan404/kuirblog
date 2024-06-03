// components/RouterTransition.tsx
import { useEffect } from "react";

import { useRouter } from "next/router";

import {
	NavigationProgress,
	nprogress,
} from "@mantine/nprogress";

export default function RouterTransition() {
	const router = useRouter();

	useEffect(() => {
		const handleStart = (url: string) =>
			url !== router.asPath && nprogress.start();

		router.events.on("routeChangeStart", handleStart);
		router.events.on("routeChangeComplete", nprogress.complete);
		router.events.on("routeChangeError", nprogress.reset);

		return () => {
			router.events.off("routeChangeStart", handleStart);
			router.events.off("routeChangeComplete", nprogress.complete);
			router.events.off("routeChangeError", nprogress.reset);
		};
	}, [router.asPath, router.events]);

	return <NavigationProgress />;
}

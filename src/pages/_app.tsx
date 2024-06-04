import { DefaultSeo, NextSeo } from "next-seo";
import { AppProps } from "next/app";

import {
	ColorSchemeScript,
	colorsTuple,
	createTheme,
	MantineProvider,
	Space,
} from "@mantine/core";

import '@mantine/core/styles.css';
import '@mantine/notifications/styles.css';
import '@mantine/nprogress/styles.css';
import '../style.css';

import { ModalsProvider } from "@mantine/modals";
import { Notifications } from "@mantine/notifications";

import { RouterTransition } from "src/components/index";

import settings from "src/config/settings";
import AppBase from "../layouts/AppBase";

const theme = createTheme({
	fontFamily: "Lexend-VariableFont",
	primaryColor: "pink",
	components: {
		Tooltip: {
			defaultProps: {
                color: "dark",
            },
            styles: {
                color: "var(--mantine-color-text)"
            }
		},
	},
});

export default function App({ Component, pageProps }: AppProps) {
	return (
		<>
			<NextSeo
				titleTemplate={`%s | ${settings.applicationName}`}
			/>
			<DefaultSeo
				openGraph={{
					type: 'website',
					locale: 'tr_TR',
					siteName: '.kuir Blog',
				}}
			/>
			<MantineProvider theme={theme} defaultColorScheme="dark">
				<Notifications />
				<RouterTransition />
				<ModalsProvider>
					<AppBase>
						<Component {...pageProps} />
						<Space h="50vh" />
					</AppBase>
				</ModalsProvider>
			</MantineProvider>
		</>
	);
}

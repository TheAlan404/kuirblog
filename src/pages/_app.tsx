import { NextSeo } from "next-seo";
import { AppProps } from "next/app";

import {
  ColorSchemeScript,
  createTheme,
  MantineProvider,
} from "@mantine/core";

import '@mantine/core/styles.css';

import { ModalsProvider } from "@mantine/modals";
import { Notifications } from "@mantine/notifications";

import { RouterTransition } from "src/components/index";

import settings from "src/config/settings";
import AppBase from "../layouts";

const theme = createTheme({

});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <NextSeo
        titleTemplate={`${settings.applicationName} | %s`}
        description="Home page of blog"
      />
        <MantineProvider theme={theme}>
          <Notifications />
          <ModalsProvider>
              <AppBase>
                {settings.enablePageProgress && <RouterTransition />}
                <Component {...pageProps} />
              </AppBase>
          </ModalsProvider>
        </MantineProvider>
    </>
  );
}

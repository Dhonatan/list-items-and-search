import React, { useEffect } from "react";

import { animateScroll } from "react-scroll";

import { NextComponentType } from "next";
import NextApp, {
  AppContext,
  AppInitialProps,
  AppProps as NextAppProps,
} from "next/app";
import Head from "next/head";

import { ThemeProvider as MuiThemeProvider } from "@material-ui/core";
import NProgress from "nprogress";
import { ThemeProvider as StyledComponentsThemeProvider } from "styled-components";

import { Main as MainLayout } from "~/layout/Main";
import Router from "~/routes/router";
import { GlobalStyle } from "~/styles/global";
import { NProgressStyle } from "~/styles/nprogress";
import { DefaultTheme } from "~/styles/themes/DefaultTheme";
import MuiTheme from "~/styles/themes/Mui";

Router.events.on("routeChangeStart", () => {
  animateScroll.scrollToTop({ duration: 150 });
  NProgress.start();
});
Router.events.on("routeChangeComplete", () => NProgress.done());
Router.events.on("routeChangeError", () => NProgress.done());

interface AppProps {
  token: string | null;
}

const App: NextComponentType<
  AppContext,
  AppInitialProps,
  Partial<AppProps> & NextAppProps
> = ({ Component, pageProps, token = null }) => {
  return (
    <>
      <Head>
        <title>Bravado</title>
        <meta charSet="utf-8" />
        <meta
          name="viewport"
          content="initial-scale=1, minimum-scale=1, width=device-width"
        />
      </Head>
      <StyledComponentsThemeProvider theme={DefaultTheme}>
        <MuiThemeProvider theme={MuiTheme}>
          <GlobalStyle />
          <NProgressStyle />
          <MainLayout {...pageProps}>
            <Component {...pageProps} />
          </MainLayout>
        </MuiThemeProvider>
      </StyledComponentsThemeProvider>
    </>
  );
};

App.getInitialProps = async (ctx) => {
  const initialProps = await NextApp.getInitialProps(ctx);

  return { ...initialProps };
};

export default App;

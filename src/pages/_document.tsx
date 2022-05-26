import React from "react";

import NextDocument, {
  DocumentContext,
  DocumentInitialProps,
  Head,
  Html,
  Main,
  NextScript,
} from "next/document";

import { ServerStyleSheets as MaterialUiServerStyleSheets } from "@material-ui/core/styles";
import { ServerStyleSheet } from "styled-components";

export default class Document extends NextDocument {
  static async getInitialProps(
    ctx: DocumentContext
  ): Promise<DocumentInitialProps> {
    const styledComponentSheet = new ServerStyleSheet();
    const materialUiSheets = new MaterialUiServerStyleSheets();
    const originalRenderPage = ctx.renderPage;
    try {
      ctx.renderPage = () =>
        originalRenderPage({
          enhanceApp: (App) => (props) =>
            styledComponentSheet.collectStyles(
              materialUiSheets.collect(<App {...props} />)
            ),
        });
      const initialProps = await NextDocument.getInitialProps(ctx);

      return {
        ...initialProps,
        styles: [
          <>
            {initialProps.styles}
            {materialUiSheets.getStyleElement()}
            {styledComponentSheet.getStyleElement()}
          </>,
        ],
      };
    } finally {
      styledComponentSheet.seal();
    }
  }

  render(): JSX.Element {
    return (
      <Html>
        <Head>
          <meta charSet="utf-8" />
          <link
            rel="icon"
            href="/assets/images/logo/favicon.ico"
            sizes="32x32"
          />

          <meta httpEquiv="x-ua-compatible" content="ie=edge" />
          <meta httpEquiv="x-ua-compatible" content="IE=edge,chrome=1" />
          <meta name="MobileOptimized" content="320" />
          <meta name="HandheldFriendly" content="True" />
          <meta name="theme-color" content="#fff" />
          <meta name="msapplication-TileColor" content="#fff" />
          <meta name="referrer" content="no-referrer-when-downgrade" />
          <meta name="google" content="notranslate" />

          <meta name="description" content="Bravado" />
          <meta name="keywords" content="" />

          <meta property="og:url" content="/" />
          <meta property="og:title" content="Bravado" />
          <meta property="og:description" content="Bravado" />
          <meta property="og:locale" content="en" />
          <meta property="og:type" content="website" />
          <meta property="og:site_name" content="Bravado" />
          <meta property="og:image" content="/assets/image/favicon.ico" />
          <meta
            property="og:image:secure_url"
            content="/assets/image/favicon.ico"
          />
          <meta property="og:image:alt" content="Thumbnail" />
          <meta property="og:image:type" content="image/png" />
          <meta property="og:image:width" content="1200" />
          <meta property="og:image:height" content="630" />

          <meta name="twitter:title" content="Bravado" />
          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:site" content="@Bravado" />
          <meta name="twitter:creator" content="@Bravado" />
          <meta name="twitter:image" content="/assets/image/favicon.ico" />
          <meta name="twitter:image:src" content="/assets/image/favicon.ico" />
          <meta name="twitter:image:alt" content="Thumbnail" />
          <meta name="twitter:image:width" content="1200" />
          <meta name="twitter:image:height" content="620" />

          <link rel="preconnect" href="https://fonts.gstatic.com" />
          <link
            href="https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap"
            rel="stylesheet"
          />
          <link
            href="https://fonts.googleapis.com/css?family=Lato:300,400,400i,700&display=swap"
            rel="stylesheet"
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

import React from "react";
import Head from "next/head";
import { StoreProvider } from "../store";

import SiteConfig from "../site.config";

import "../styles/app.css";

function MyApp({ Component, pageProps }) {
  return (
    <StoreProvider>
      <Head>
        <meta charSet="utf-8" />
        <meta httpEquiv="x-ua-compatible" content="ie=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content={SiteConfig.description} />
      </Head>
      <Component {...pageProps} />
    </StoreProvider>
  );
}

export default MyApp;

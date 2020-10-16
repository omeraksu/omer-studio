import React from "react";
import { StoreProvider } from "../store";

import "../styles/app.css";

function MyApp({ Component, pageProps }) {
  return (
    <StoreProvider>
      <Component {...pageProps} />
    </StoreProvider>
  );
}

export default MyApp;

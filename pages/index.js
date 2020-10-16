import React, { useContext } from "react";
import Head from "next/head";
import { THEME } from "../constant";

import StoreContext from "../store";
import Button from "../components/button";

function HomePage() {
  const store = useContext(StoreContext);

  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Button
          onClick={() =>
            store.changeTheme(
              store.theme === THEME.LIGHT ? THEME.DARK : THEME.LIGHT
            )
          }
        >
          {store.theme === THEME.LIGHT ? "Dark" : "Light"}
        </Button>
      </main>

      <footer>
        <h3>selam footer</h3>
      </footer>
    </div>
  );
}

export default HomePage;

import React, { useContext } from "react";
import Head from "next/head";
import StoreContext from "../store";
import { THEME } from "../constant";

import Button from "../components/button";

import styles from "../styles/home.module.css";

function HomePage() {
  const store = useContext(StoreContext);

  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.container}>
        <h1>omer.studio</h1>
        <p>
          Storytelling with <br />
          Design & <code>Code</code>
        </p>
        <Button
          onClick={() =>
            store.changeTheme(
              store.theme === THEME.LIGHT ? THEME.DARK : THEME.LIGHT
            )
          }
        >
          Theme: {store.theme === THEME.LIGHT ? "Dark" : "Light"}
        </Button>
      </main>
    </div>
  );
}

export default HomePage;

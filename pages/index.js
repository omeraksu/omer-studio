import React, { useContext, useRef } from "react";
import { motion } from "framer-motion";
import Head from "next/head";

import StoreContext from "../store";
import { THEME } from "../constant";

import Button from "../components/button";

import styles from "../styles/home.module.css";

function HomePage() {
  const store = useContext(StoreContext);
  const constraintsRef = useRef(null);

  return (
    <div>
      <Head>
        <title>ProdArt | omer.studio</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.container}>
        <h3>omer.studio</h3>
        <h1 style={{ textAlign: "center" }}>
          Storytelling through <br />
          Design and <code>Code.</code>
        </h1>
        <h2>Coming Soon.</h2>
        {/*<Button
          onClick={() =>
            store.changeTheme(
              store.theme === THEME.LIGHT ? THEME.DARK : THEME.LIGHT
            )
          }
        >
          Theme: {store.theme === THEME.LIGHT ? "Dark" : "Light"}
        </Button>
        <div className="examp">
          <motion.div className="drag-area" ref={constraintsRef} />
          <motion.div
            drag
            dragConstraints={constraintsRef}
            dragMomentum={false}
          />
        </div>*/}
      </main>
    </div>
  );
}

export default HomePage;

import React, { useContext } from "react";

import styles from "./index.module.css";

import Header from "../header";
import Button from "../button";
import { THEME } from "../../constant";
import StoreContext from "../../store";

function Layout({ children }) {
  const store = useContext(StoreContext);

  return (
    <div className={styles.container}>
      <Header />
      <main>{children}</main>
      <Button
        onClick={() =>
          store.changeTheme(
            store.theme === THEME.LIGHT ? THEME.DARK : THEME.LIGHT
          )
        }
      >
        {store.theme === THEME.LIGHT ? "Dark" : "Light"}
      </Button>
      {/*<Footer />*/}
    </div>
  );
}

export default Layout;

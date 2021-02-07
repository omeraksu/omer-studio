import React from "react";

import styles from "./index.module.css";
import Nav from "../nav";
import Logo from "../logo";

function Footer({ children }) {
  return (
    <footer className={styles.container}>
      <Logo />
      <Nav className={styles.nav} />
      <div>Mail list.</div>
    </footer>
  );
}

export default Footer;

import React from "react";

import styles from "./index.module.css";
import Nav from "../nav";
import Button from "../button";
import Logo from "../logo";

function Header({}) {
  return (
    <header className={styles.header}>
      <Logo />
      <Nav />
      <Button>Get in touch.</Button>
    </header>
  );
}

export default Header;

import React from "react";

import styles from "./index.module.css";
import Nav from "../nav";
import Button from "../button";
import Logo from "../logo";

function Header({}) {
  return (
    <header className={styles.header}>
      <Logo />
    </header>
  );
}

export default Header;

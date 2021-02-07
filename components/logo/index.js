import React, { createRef } from "react";

import styles from "./index.module.css";

import { PAGES } from "../../constant";
import { Linkim } from "../text";
import Link from "next/link";

function Logo() {
  return (
    <Link href={PAGES.home.path}>
      <a className={styles.logo}>.studio</a>
    </Link>
  );
}

export default Logo;

import React from "react";
import cn from "classnames";

import { Linkim } from "../text";

import { PAGES } from "../../constant";

import styles from "./index.module.css";
import Link from "next/link";

function Nav({ className }) {
  const ref = React.createRef();
  return (
    <nav className={cn(styles.nav, className)}>
      {Object.keys(PAGES).map((key) => {
        const PAGE = PAGES[key];
        return (
          <Link href={PAGE.path} key={`key-${key}`}>
            <a className={styles.a}>{PAGE.name}</a>
          </Link>
        );
      })}
    </nav>
  );
}

export default Nav;

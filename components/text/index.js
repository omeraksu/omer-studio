import React from "react";
import cn from "classnames";

import styles from "./index.module.css";

export const Linkim = () => {
  return (
    <>
      <a className={cn(styles.a, className)} {...props}>
        {name}
      </a>
    </>
  );
};

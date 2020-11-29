import React from "react";

import { motion } from "framer-motion";

function Motion({ children, ...props }) {
  return (
    <>
      <motion.div {...props}>{children}</motion.div>
    </>
  );
}

export default Motion;

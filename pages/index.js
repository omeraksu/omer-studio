import React from "react";
import { motion, useMotionValue } from "framer-motion";

function HomePage() {
  const x = useMotionValue(0);
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        height: "100vh",
      }}
    >
      <motion.div style={{ x, opacity: 1, scale: 0.5 }} />
    </div>
  );
}

export default HomePage;

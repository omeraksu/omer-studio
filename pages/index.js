import React from "react";
import { motion, useMotionValue } from "framer-motion";

function HomePage() {
  const x = useMotionValue(0);
  return (
<<<<<<< HEAD
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        height: "100vh",
      }}
    >
      <motion.div style={{ x, opacity: 1, scale: 0.5 }} />
=======
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
        <motion.div>
          
        </motion.div>
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
>>>>>>> 9766f11eda64d8f2b310b62d87f63a1c9b1c67e5
    </div>
  );
}

export default HomePage;

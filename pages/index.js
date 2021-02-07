import React from "react";
import Head from "next/head";
import Layout from "../components/layout";

function HomePage() {
  return (
    <Layout>
      <Head>
        <title>ProdArt | omer.studio</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <h1>
        Storytelling through <br />
        Design and <code>Code.</code>
      </h1>
    </Layout>
  );
}

export default HomePage;

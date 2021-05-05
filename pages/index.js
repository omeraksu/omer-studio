import React from "react";
import Head from "next/head";
import Layout from "../components/layout";
import Button from "../components/button";

function HomePage() {
  return (
    <Layout>
      <Head>
        <title>ProdArt | omer.studio</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="flex flex-col space-y-4 justify-center mt-24 items-center mb-6">
        <h1 className="heading">
          I'm telling <br />
          stories by
          <br />
          design
          <br />
          and
          <br />
          <code>coding</code>.
        </h1>
        <Button disabled>Coming Soon.</Button>
      </div>
    </Layout>
  );
}

export default HomePage;

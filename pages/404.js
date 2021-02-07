import React from "react";
import Layout from "../components/layout";

import Link from "next/link";
import Button from "../components/button";

function Error() {
  return (
    <Layout>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexDirection: "column",
          height: "80vh",
        }}
      >
        <h1 className="error">404</h1>
        <p style={{ marginBottom: 20 }}>Üzgünüm. Aradığın sayfa bulunamadı.</p>
        <Link href="/">
          <Button>
            <h4>Ana Sayfa</h4>
          </Button>
        </Link>
      </div>
    </Layout>
  );
}

export default Error;

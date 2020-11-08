import React from "react";
import Head from "next/head";

import Navbar from "./Navbar";
import Footer from "./Footer";

const Layout = (props) => {
  return (
    <div>
      <Head>
        <title>LHM | High Quality Soap</title>
      </Head>
      <Navbar />
      {props.children}
      <Footer />
    </div>
  );
};

export default Layout;

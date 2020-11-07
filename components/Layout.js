import React from "react";
import Head from "next/head";

import Navbar from "./Navbar";

const Layout = (props) => {
  return (
    <div>
      <Head>
        <title>LHM | High Quality Soap</title>
      </Head>
      <Navbar />
      {props.children}
    </div>
  );
};

export default Layout;

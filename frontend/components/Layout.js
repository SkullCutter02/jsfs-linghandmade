import React from "react";
import Head from "next/head";

import Navbar from "./Navbar";
import Footer from "./Footer";
import { Provider } from "../context";

const Layout = (props) => {
  return (
    <React.Fragment>
      <div className="container">
        <Head>
          <title>LHM | High Quality Soap</title>
        </Head>
        <Navbar />
        {props.children}
        <Footer />
      </div>

      <style jsx>{`
        .container {
          min-height: 100vh;
          position: relative;
        }
      `}</style>
    </React.Fragment>
  );
};

export default Layout;

import React from "react";
import Head from "next/head";

import Layout from "../components/Layout";
import Header from "../components/Header";
import Information from "../components/Information";
import Featured from "../components/Featured";
import SectionTitle from "../components/SectionTitle";
import { Provider } from "../context";

const Home = () => {
  return (
    <Provider>
      <Head>
        <link rel="shortcut icon" href="#" />
      </Head>
      <Layout>
        <Header titleText={"Ling Handmade"} />
        <Featured />
        <SectionTitle titleText={"Why choose LHM?"} />
        <Information reverse={false} background={"/download.jpeg"} />
        <Information reverse={true} background={"/download.jpeg"} />
        <Information reverse={false} background={"/download.jpeg"} />
      </Layout>
    </Provider>
  );
};

export default Home;

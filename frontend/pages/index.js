import React from "react";
import Head from "next/head";

import Layout from "../components/Layout";
import Header from "../components/Header";
import Information from "../components/Information";
import Featured from "../components/Featured";
import SectionTitle from "../components/SectionTitle";
import { Provider } from "../context";
import { whyChooseHandmadeSoap, whyChooseLHM } from "../informationText";

const Home = () => {
  return (
    <Provider>
      <Head>
        <link rel="shortcut icon" href="#" />
      </Head>
      <Layout>
        <Header titleText={"Ling Handmade"} imgSrc={"/download.jpeg"} />
        <Featured />
        <SectionTitle titleText={"Why choose handmade soap?"} />
        <Information info={whyChooseHandmadeSoap} />
        <SectionTitle titleText={"Why choose LHM?"} />
        <Information info={whyChooseLHM} />
      </Layout>
    </Provider>
  );
};

export default Home;

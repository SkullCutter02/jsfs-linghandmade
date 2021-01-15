import React from "react";
import Head from "next/head";

import Layout from "../components/Layout";
import Header from "../components/Header";
import Information from "../components/Information";
import Featured from "../components/Featured";
import SectionTitle from "../components/SectionTitle";
import ContactUs from "../components/ContactUs";
import { Provider } from "../context/context";
import { whyChooseHandmadeSoap, whyChooseLHM } from "../utils/informationText";

const Home = () => {
  return (
    <Provider>
      <Head>
        <link rel="shortcut icon" href="#" />
      </Head>
      <Layout>
        <Header titleText={"Ling Handmade"} imgSrc={"/download.jpeg"} />
        <Featured />
        <SectionTitle titleText={"Why handmade soaps?"} />
        <Information info={whyChooseHandmadeSoap} />
        <SectionTitle titleText={"Why choose LHM?"} />
        <Information info={whyChooseLHM} />
        <SectionTitle titleText={"Contact Us"} />
        <ContactUs />
      </Layout>
    </Provider>
  );
};

export default Home;

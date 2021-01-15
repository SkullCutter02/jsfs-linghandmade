import React from "react";
import Head from "next/head";

import Layout from "../components/Layout";
import Header from "../components/Header";
import Information from "../components/Information";
import Featured from "../components/Featured";
import SectionTitle from "../components/SectionTitle";
import ContactUs from "../components/ContactUs";
import { ProductsProvider } from "../context/ProductsContext";
import { whyChooseHandmadeSoap, whyChooseLHM } from "../utils/informationText";

const Home = () => {
  return (
    <ProductsProvider>
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
    </ProductsProvider>
  );
};

export default Home;

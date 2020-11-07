import React from "react";

import Layout from "../components/Layout";
import Header from "../components/Header";
import Information from "../components/Information";
import Featured from "../components/Featured";

const Home = () => {
  return (
    <React.Fragment>
      <Layout>
        <Header titleText={"Ling Handmade"} />
        <Featured />
        <Information reverse={false} background={"/download.jpeg"} />
        <Information reverse={true} background={"/download.jpeg"} />
        <Information reverse={false} background={"/download.jpeg"} />
      </Layout>
    </React.Fragment>
  );
};

export default Home;

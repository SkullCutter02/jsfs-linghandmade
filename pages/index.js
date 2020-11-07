import React from "react";

import Layout from "../components/Layout";
import Header from "../components/Header";
import Information from "../components/Information";

const Home = () => {
  return (
    <React.Fragment>
      <Layout>
        <Header titleText={"L.H.M"} />
        <Information reverse={false} background={"/download.jpeg"} />
        <Information reverse={true} background={"/download.jpeg"} />
      </Layout>
    </React.Fragment>
  );
};

export default Home;

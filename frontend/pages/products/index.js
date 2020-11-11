import React from "react";

import Layout from "../../components/Layout";
import Categories from "../../components/Categories";
import SectionTitle from "../../components/SectionTitle";

const ProductsPage = ({ data }) => {
  return (
    <React.Fragment>
      <Layout>
        <SectionTitle titleText={"Products"} />
        <Categories categories={data} />
      </Layout>
    </React.Fragment>
  );
};

export async function getStaticProps() {
  const res = await fetch("http://localhost:1337/categories");
  const data = await res.json();

  return {
    props: {
      data,
    },
  };
}

export default ProductsPage;

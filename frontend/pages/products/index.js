import React, { useState } from "react";

import Layout from "../../components/Layout";
import Categories from "../../components/Categories";
import SectionTitle from "../../components/SectionTitle";

const ProductsPage = () => {
  const [state, setState] = useState();

  fetch("http://188.166.253.111/categories")
    .then((res) => res.json())
    .then((data) => setState(data))
    .catch((err) => console.log(err));

  if (!state) {
    return <div>Loading...</div>;
  }

  return (
    <React.Fragment>
      <Layout>
        <SectionTitle titleText={"Products"} />
        <Categories categories={state} />
      </Layout>
    </React.Fragment>
  );
};

export default ProductsPage;

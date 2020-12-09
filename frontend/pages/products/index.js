import React, { useState } from "react";

import Layout from "../../components/Layout";
import Categories from "../../components/Categories";
import SectionTitle from "../../components/SectionTitle";

const ProductsPage = () => {
  const [state, setState] = useState();

  fetch("https://lhmstrapi.herokuapp.com/categories")
    .then((res) => res.json())
    .then((data) => setState(data))
    .catch((err) => console.log(err));

  return (
    <React.Fragment>
      <Layout>
        <SectionTitle titleText={"Products"} />
        {!state ? <div /> : <Categories categories={state} />}
      </Layout>
    </React.Fragment>
  );
};

export default ProductsPage;

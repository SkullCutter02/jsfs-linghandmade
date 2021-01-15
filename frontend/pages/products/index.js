import React, { useState, useEffect } from "react";

import Layout from "../../components/Layout";
import Categories from "../../components/Categories";
import SectionTitle from "../../components/SectionTitle";
import spinner from "../../utils/spinner";

import host from "../../utils/host";

const ProductsPage = () => {
  const [state, setState] = useState();

  useEffect(() => {
    fetch(`${host}/categories`)
      .then((res) => res.json())
      .then((data) => setState(data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <React.Fragment>
      <Layout>
        <SectionTitle titleText={"Products"} />
        {!state ? (
          <img src={spinner} alt="spinner" className="spinner" />
        ) : (
          <Categories categories={state} />
        )}
      </Layout>
    </React.Fragment>
  );
};

export default ProductsPage;

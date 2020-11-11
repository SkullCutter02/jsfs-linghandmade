import React from "react";
import { useRouter } from "next/router";

import Layout from "../../../components/Layout";
import Products from "../../../components/Products";
import { Provider } from "../../../context";

const CategoryPage = () => {
  const router = useRouter();
  const { category } = router.query;

  return (
    <Provider>
      <Layout>
        <Products category={category} />
      </Layout>
    </Provider>
  );
};

export default CategoryPage;

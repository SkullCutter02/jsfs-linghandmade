import React, { useContext } from "react";
import { useRouter } from "next/router";

import Layout from "../../../components/Layout";
import { Provider } from "../../../context";

const Category = () => {
  const router = useRouter();
  const { category } = router.query;

  return (
    <Provider>
      <Layout>{category}</Layout>
    </Provider>
  );
};

export default Category;

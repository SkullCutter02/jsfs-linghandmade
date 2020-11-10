import React, { useContext } from "react";
import { useRouter } from "next/router";

import Layout from "../../../components/Layout";
import { Context } from "../../../context";

const Category = () => {
  const router = useRouter();
  const { category } = router.query;

  return (
    <React.Fragment>
      <Layout>{category}</Layout>
    </React.Fragment>
  );
};

export default Category;

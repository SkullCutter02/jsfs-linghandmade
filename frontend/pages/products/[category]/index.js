import React from "react";
import { useRouter } from "next/router";

import Layout from "../../../components/Layout";
import Products from "../../../components/Products";
import { ProductsProvider } from "../../../context/ProductsContext";

const CategoryPage = () => {
  const router = useRouter();
  const { category } = router.query;

  return (
    <ProductsProvider>
      <Layout>
        <Products category={category} />
      </Layout>
    </ProductsProvider>
  );
};

export default CategoryPage;

import React from "react";
import { useRouter } from "next/router";

import { ProductsProvider } from "../../../../context/ProductsContext";
import ProductPage from "../../../../components/ProductPage";
import Layout from "../../../../components/Layout";

const SingleProductPage = () => {
  const router = useRouter();
  const { slug } = router.query;

  return (
    <ProductsProvider>
      <Layout>
        <ProductPage slug={slug} />
      </Layout>
    </ProductsProvider>
  );
};

export default SingleProductPage;

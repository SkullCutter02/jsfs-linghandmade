import React from "react";
import { useRouter } from "next/router";

import { Provider } from "../../../../context/context";
import ProductPage from "../../../../components/ProductPage";
import Layout from "../../../../components/Layout";

const SingleProductPage = () => {
  const router = useRouter();
  const { slug } = router.query;

  return (
    <Provider>
      <Layout>
        <ProductPage slug={slug} />
      </Layout>
    </Provider>
  );
};

export default SingleProductPage;

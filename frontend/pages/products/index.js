import React, { useState } from "react";

import Layout from "../../components/Layout";
import Categories from "../../components/Categories";
import SectionTitle from "../../components/SectionTitle";

const ProductsPage = () => {
  const [state, setState] = useState();

  fetch("http://localhost:1337/categories")
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

// export async function getStaticProps() {
//   const res = await fetch("http://localhost:1337/categories");
//   const data = await res.json();
//
//   return {
//     props: {
//       data,
//     },
//   };
// }

export default ProductsPage;

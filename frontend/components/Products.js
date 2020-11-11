import React, { useContext, useEffect, useState } from "react";

import { Context } from "../context";

const Products = ({ category }) => {
  const data = useContext(Context).data;
  const [products, setProducts] = useState();

  useEffect(() => {
    if (data !== undefined) {
      setProducts(
        data.filter((product) => product.categories[0].slug === category)
      );
    }
  }, [data]);

  return <React.Fragment>{category}</React.Fragment>;
};

export default Products;

import React, { useContext, useEffect, useState } from "react";

import { Context } from "../context";
import Product from "./Product";

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

  return (
    <React.Fragment>
      <div className="grid-container"></div>
    </React.Fragment>
  );
};

export default Products;

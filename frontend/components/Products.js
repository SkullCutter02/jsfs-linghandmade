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
      <div className="grid-container">
        {products ? (
          products.map((product) => {
            return (
              <Product
                key={product.id}
                product={product}
                imgSrc={`http://localhost:1337${product.photo.formats.medium.url}`}
                alternativeTxt={product.photo.alternativeText}
                name={product.name}
                price={product.price}
              />
            );
          })
        ) : (
          <div>Loading...</div>
        )}
      </div>

      <style jsx>{`
        .grid-container {
          width: 100%;
          height: 100%;
          margin-top: 2em;
          display: grid;
          grid-template-columns: 1fr 1fr 1fr;
        }
      `}</style>
    </React.Fragment>
  );
};

export default Products;

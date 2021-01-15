import React, { useContext, useEffect, useState } from "react";

import { ProductsContext } from "../context/ProductsContext";
import Product from "./Product";
import SectionTitle from "./SectionTitle";
import spinner from "../utils/spinner";
import host from "../utils/host";

const Products = ({ category }) => {
  const data = useContext(ProductsContext).data;
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
      {products && (
        <SectionTitle
          titleText={(products && products[0]?.categories[0].name) || category}
        />
      )}
      {products ? (
        <div className="grid-container">
          {products.map((product) => {
            return (
              <Product
                key={product.id}
                imgSrc={`${
                  host === "http://localhost:1337"
                    ? "http://localhost:1337"
                    : ""
                }${product.photo.formats.medium.url}`}
                alternativeTxt={product.photo.alternativeText}
                name={product.name}
                price={product.price}
                categorySlug={category}
                productSlug={product.slug}
              />
            );
          })}
        </div>
      ) : (
        <img className="spinner" src={spinner} alt="spinner" />
      )}

      <style jsx>{`
        .grid-container {
          width: 100%;
          height: 100%;
          margin-top: 2em;
          display: grid;
          grid-template-columns: 1fr 1fr 1fr;
        }

        @media screen and (max-width: 1000px) {
          .grid-container {
            grid-template-columns: 1fr 1fr;
          }
        }

        @media screen and (max-width: 600px) {
          .grid-container {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </React.Fragment>
  );
};

export default Products;

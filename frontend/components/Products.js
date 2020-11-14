import React, { useContext, useEffect, useState } from "react";

import { Context } from "../context";
import Product from "./Product";
import SectionTitle from "./SectionTitle";

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
      <SectionTitle
        titleText={
          category && category.charAt(0).toUpperCase() + category.slice(1)
        }
      />
      <div className="grid-container">
        {products ? (
          products.map((product) => {
            return (
              <Product
                key={product.id}
                imgSrc={`https://lhmstrapi.herokuapp.com${product.photo.formats.medium.url}`}
                alternativeTxt={product.photo.alternativeText}
                name={product.name}
                price={product.price}
                categorySlug={category}
                productSlug={product.slug}
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

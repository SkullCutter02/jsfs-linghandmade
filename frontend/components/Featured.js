import React, { useContext, useState, useEffect } from "react";

import SectionTitle from "./SectionTitle";
import Product from "./Product";
import { Context } from "../context";

const Featured = () => {
  const products = useContext(Context).data;
  const [featured, setFeatured] = useState();

  useEffect(() => {
    if (products !== undefined) {
      setFeatured(products.filter((item) => item.featured === true));
    }
  }, [products]);

  return (
    <React.Fragment>
      <section>
        <SectionTitle titleText={"Featured"} />
        <div className="grid-container">
          {featured ? (
            featured.map((product) => {
              return (
                <Product
                  key={product.id}
                  imgSrc={`http://localhost:1337${product.photo.formats.medium.url}`}
                  alternativeTxt={product.photo.alternativeText}
                  name={product.name}
                  price={product.price}
                />
              );
            })
          ) : (
            <div style={{ margin: "0 auto" }}>Loading...</div>
          )}
        </div>
      </section>

      <style jsx>{`
        section {
          height: 500px;
          background: white;
          padding: 1px 0;
        }

        .grid-container {
          margin-top: 2em;
          height: 350px;
          display: grid;
          grid-auto-flow: row;
          grid-template-columns: 1fr 1fr 1fr;
        }
      `}</style>
    </React.Fragment>
  );
};

export default Featured;

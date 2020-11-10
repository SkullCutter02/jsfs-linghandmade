import React, { useContext, useState, useEffect } from "react";

import SectionTitle from "./SectionTitle";
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
                <div className="grid-item" key={product.id}>
                  <img
                    src={`http://localhost:1337${product.photo.formats.medium.url}`}
                    alt={product.photo.alternativeText}
                  />
                  <p className="name">{product.name}</p>
                  <p className="price">${product.price}</p>
                </div>
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
          background: #d3d3d3;
          padding: 1px 0;
        }

        .grid-container {
          margin-top: 2em;
          height: 350px;
          display: grid;
          grid-auto-flow: column;
          grid-template-columns: 1fr 1fr 1fr;
        }

        .grid-item {
          display: flex;
          justify-content: space-evenly;
          align-items: center;
          flex-direction: column;
        }

        p {
          font-size: 1.5rem;
        }

        .name {
          margin-top: 10px;
        }

        img {
          width: 80%;
          height: 70%;
          object-fit: cover;
          border: 3px solid #af9b7d;
          cursor: pointer;
        }
      `}</style>
    </React.Fragment>
  );
};

export default Featured;

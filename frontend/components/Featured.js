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

  function showOverlay(e) {
    e.target.parentNode.firstElementChild.style.opacity = "100%";
  }

  function hideOverlay(e) {
    e.target.parentNode.firstElementChild.style.opacity = "0";
  }

  return (
    <React.Fragment>
      <section>
        <SectionTitle titleText={"Featured"} />
        <div className="grid-container">
          {featured ? (
            featured.map((product) => {
              return (
                <div className="grid-item" key={product.id}>
                  <div className="container">
                    <div
                      className="overlay"
                      onMouseEnter={showOverlay}
                      onMouseLeave={hideOverlay}
                    />
                    <button type={"click"} onMouseEnter={showOverlay}>
                      LEARN MORE
                    </button>
                    <img
                      src={`http://localhost:1337${product.photo.formats.medium.url}`}
                      alt={product.photo.alternativeText}
                    />
                  </div>
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
          background: white;
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

        .container {
          width: 80%;
          height: 70%;
          border: 3px solid #af9b7d;
          position: relative;
          display: flex;
          justify-content: center;
        }

        .overlay {
          opacity: 0;
          position: absolute;
          width: 100%;
          height: 100%;
          background: rgba(0, 0, 0, 0.3);
          transition-property: all;
          transition-duration: 0.3s;
          transition-timing-function: ease-in;
        }

        .overlay:hover {
          opacity: 100%;
        }

        img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }

        button {
          opacity: 0;
          position: absolute;
          align-self: center;
          width: 40%;
          height: 15%;
          background: #af9b7d;
          border: 3px solid #af9b7d;
          color: black;
          font-size: 1rem;
          cursor: pointer;
          z-index: 3;
          transition-property: all;
          transition-duration: 0.3s;
          transition-timing-function: ease-in;
        }

        .overlay:hover ~ button {
          opacity: 100%;
        }

        button:hover {
          opacity: 100%;
          background: none;
        }

        button:hover ~ .overlay {
          opacity: 100%;
        }
      `}</style>
    </React.Fragment>
  );
};

export default Featured;

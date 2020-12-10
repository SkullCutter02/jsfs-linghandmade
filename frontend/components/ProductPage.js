import React, { useContext, useState, useEffect } from "react";
import Link from "next/link";

import Carousel from "./Carousel";
import { Context } from "../context";

const ProductPage = ({ slug }) => {
  const products = useContext(Context).data;
  const [product, setProduct] = useState();
  const [items, setItems] = useState([]);

  const handleDragStart = (e) => e.preventDefault();

  useEffect(() => {
    if (products !== undefined) {
      setProduct(products.filter((product) => product.slug === slug));
      setProduct((product) => product[0]);
    }
  }, [products]);

  useEffect(() => {
    if (product !== undefined) {
      let arr = [];
      product.carousel.forEach((image) => {
        const imgUrl = image.formats.small.url;
        const altText = image.alternativeText;
        arr.push(
          <img
            src={imgUrl}
            alt={altText}
            key={image.id}
            onDragEnter={handleDragStart}
            className="image-carousel"
          />
        );
      });
      if (arr.length <= 0) {
        arr.push(
          <img
            src={product.photo.formats.medium.url}
            alt={product.photo.alternativeText}
            key={product.photo.id}
            onDragEnter={handleDragStart}
            className="image-carousel"
            style={{ width: "70%", height: "100%", objectFit: "cover" }}
          />
        );
      } else {
        arr.push(
          <img
            src={product.photo.formats.small.url}
            alt={product.photo.alternativeText}
            key={product.photo.id}
            onDragEnter={handleDragStart}
            className="image-carousel"
          />
        );
      }
      setItems(arr);
    }
  }, [product]);

  return (
    <React.Fragment>
      <header>
        <div className="header-hero-component">
          <img
            src={`${product?.photo.formats.large.url}`}
            alt={product?.photo.alternativeText}
          />
          <div className="header-title-container">
            <h1 className="title">{product?.name}</h1>
            <div className="line" />
            <Link href={`/products/${product?.categories[0].slug}`}>
              <button className="back">BACK</button>
            </Link>
          </div>
        </div>

        {items.length === 1 ? (
          <div className="extra-img">{items}</div>
        ) : items.length === product?.carousel.length + 1 ? (
          <Carousel items={items} />
        ) : (
          <div />
        )}

        <div className="main-body-section">
          <main>
            <h2 className="description-title">Description:</h2>
            <p className="description">{product?.description}</p>
          </main>
          <aside>
            <h2>Price: ${product?.price}</h2>
            <h4>
              <strong>Ingredients:</strong> {product?.ingredients}
            </h4>
          </aside>
        </div>
      </header>

      <style jsx>{`
        // Hero

        .header-hero-component {
          position: relative;
        }

        img {
          width: 100%;
          height: 450px;
          object-fit: cover;
        }

        .header-title-container {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          height: 180px;
          width: 70%;
          background: rgba(0, 0, 0, 0.5);
          display: flex;
          flex-direction: column;
          justify-content: center;
        }

        .title {
          color: white;
          font-size: 50px;
          text-align: center;
          margin-bottom: 4px;
        }

        .line {
          width: 70px;
          padding-top: 5px;
          border-bottom: 4px solid #af9b7d;
          margin: 0 auto;
        }

        .back {
          width: 120px;
          height: 15%;
          margin: 20px auto 0;
          background: #af9b7d;
          border: 3px solid #af9b7d;
          color: black;
          font-size: 1rem;
          cursor: pointer;
          transition-property: all;
          transition-duration: 0.3s;
          transition-timing-function: ease-in;
        }

        .back:hover {
          background: none;
        }

        // Main

        .main-body-section {
          width: calc(100% - 10px - 5px);
          display: flex;
          justify-content: space-evenly;
          margin: 40px 10px;
        }

        main {
          width: 45%;
          margin-right: 10px;
        }

        aside {
          margin-right: 5px;
          width: 45%;
        }

        .description {
          margin-top: 10px;
        }

        h4 {
          margin-top: 10px;
          font-weight: 400;
        }

        strong {
          font-size: 22px;
          display: block;
        }

        .extra-img {
          display: flex;
          justify-content: center;
          width: 100%;
          height: 350px;
          margin-top: 40px;
        }

        // Media Queries

        @media screen and (max-width: 700px) {
          .title {
            font-size: 42px;
          }

          .main-body-section {
            flex-direction: column-reverse;
            align-items: center;
          }

          main {
            width: 85%;
            margin-bottom: 5px;
          }

          aside {
            width: 85%;
            margin-bottom: 15px;
          }

          .extra-img {
            height: 200px;
          }
        }

        @media screen and (max-width: 600px) {
          .title {
            font-size: 38px;
          }

          .back {
            font-size: 0.8rem;
          }
        }

        @media screen and (max-width: 500px) {
          .title {
            font-size: 28px;
          }

          .back {
            font-size: 0.7rem;
          }
        }
      `}</style>
    </React.Fragment>
  );
};

export default ProductPage;

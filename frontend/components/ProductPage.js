import React, { useContext, useState, useEffect } from "react";
import Link from "next/link";

import Carousel from "./Carousel";
import { ProductsContext } from "../context/ProductsContext";
import { CartContext } from "../context/CartContext";
import spinner from "../utils/spinner";
import host from "../utils/host";

const ProductPage = ({ slug }) => {
  const [product, setProduct] = useState();
  const [items, setItems] = useState([]);

  const products = useContext(ProductsContext).data;
  const cartContext = useContext(CartContext);

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
            src={`${
              host === "http://localhost:1337" ? "http://localhost:1337" : ""
            }${imgUrl}`}
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
            src={`${
              host === "http://localhost:1337" ? "http://localhost:1337" : ""
            }${product.photo.formats.medium.url}`}
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
            src={`${
              host === "http://localhost:1337" ? "http://localhost:1337" : ""
            }${product.photo.formats.small.url}`}
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

  const addToCart = (product) => {
    const notification = document.getElementById("notification");

    notification.style.visibility = "visible";

    cartContext.setItem(product);

    setTimeout(() => {
      notification.style.visibility = "hidden";
    }, [2000]);
  };

  return (
    <React.Fragment>
      <div id="notification">
        <h2>{product?.name} is added to your shopping cart!</h2>
      </div>
      <header>
        {product ? (
          <div>
            <div className="header-hero-component">
              <img
                src={`${
                  host === "http://localhost:1337"
                    ? "http://localhost:1337"
                    : ""
                }${product?.photo.formats.large.url}`}
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
                <div className="price-add-cart">
                  <h2>Price: ${product?.price}</h2>
                  {cartContext?.cartItems?.some(
                    (item) => product.name === item.name
                  ) ? (
                    <button className="add-cart-btn in-cart">In Cart</button>
                  ) : (
                    <button
                      className="add-cart-btn"
                      onClick={() => addToCart(product)}
                    >
                      Add to Cart
                    </button>
                  )}
                </div>
                <h4>
                  <strong>Ingredients:</strong> {product?.ingredients}
                </h4>
              </aside>
            </div>
          </div>
        ) : (
          <img className="spinner" src={spinner} alt="spinner" />
        )}
      </header>

      <style jsx>{`
        #notification {
          position: fixed;
          padding: 20px 0;
          z-index: 1000;
          width: 500px;
          margin: 5% auto;
          left: 0;
          right: 0;
          background: #e9e9e9;
          border-radius: 15px;
          display: flex;
          justify-content: center;
          align-items: center;
          visibility: hidden;
          transition: visibility 3s;
        }

        #notification h2 {
          color: #2d2d2d;
          margin: 0 20px;
          text-align: center;
        }

        .spinner {
          display: block;
          margin: 0 auto;
          width: 200px;
        }

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

        .price-add-cart {
          display: flex;
          align-items: center;
        }

        .add-cart-btn {
          height: 25px;
          width: 110px;
          border: none;
          background: #3580c2;
          color: #fff;
          border-radius: 4px;
          font-size: 0.8rem;
          cursor: pointer;
          margin: 0 40px;
        }

        .add-cart-btn:hover {
          background: #1d649b;
        }

        .in-cart {
          background: #12bf12;
        }

        .in-cart:hover {
          background: #04a204;
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

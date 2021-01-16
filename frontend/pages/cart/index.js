import React, { useContext, useState, useEffect } from "react";
import Link from "next/link";

import Layout from "../../components/Layout";
import { CartContext } from "../../context/CartContext";
import spinner from "../../utils/spinner";
import host from "../../utils/host";

const CartPage = () => {
  const [totalCost, setTotalCost] = useState(0);

  const cartContext = useContext(CartContext);

  useEffect(() => {
    if (cartContext !== undefined) {
      if (cartContext.cartItems.length > 0) {
        let accumulator = 0;
        cartContext.cartItems.forEach((item) => {
          accumulator += item.price;
        });
        setTotalCost(accumulator);
      }
    }
  }, [cartContext.cartItems]);

  const removeFromCart = (cartItem) => {
    if (cartContext) {
      cartContext.removeItem(cartItem);
    }
  };

  return (
    <React.Fragment>
      <Layout>
        <div className="container">
          {cartContext ? (
            cartContext.cartItems.map((cartItem) => (
              <React.Fragment>
                <div className="cart-item-container">
                  <div className="left">
                    <img
                      className="item-img"
                      src={`${
                        host === "http://localhost:1337"
                          ? "http://localhost:1337"
                          : ""
                      }${cartItem?.photo.formats.small.url}`}
                      alt={cartItem?.photo.alternativeText}
                    />
                  </div>
                  <div className="right">
                    <Link
                      href={`/products/${cartItem.categories[0].slug}/${cartItem.slug}`}
                    >
                      <h1 className="product-name">{cartItem.name}</h1>
                    </Link>
                    <p className="product-description">
                      {cartItem.description}
                    </p>
                    <div className="price-remove-cart-btn">
                      <p className="product-price">${cartItem.price}</p>
                      <button
                        className="remove-cart-btn"
                        onClick={() => removeFromCart(cartItem)}
                      >
                        Remove from Cart
                      </button>
                    </div>
                  </div>
                </div>
              </React.Fragment>
            ))
          ) : (
            <img className="spinner" src={spinner} alt="spinner" />
          )}
          <div className="cart-info">
            <p>Total: ${totalCost}</p>
          </div>
        </div>
      </Layout>

      <style jsx>{`
        .spinner {
          display: block;
          margin: 0 auto;
          width: 200px;
        }

        .container {
          width: 85%;
          margin: 0 auto;
        }

        .cart-item-container {
          width: 100%;
          margin: 50px 0;
          border: 2px solid grey;
          display: flex;
          padding: 20px;
        }

        .left {
          width: 35%;
          margin-right: 20px;
        }

        .item-img {
          height: 100%;
          width: 100%;
          object-fit: cover;
        }

        .right {
          width: calc(100% - 35%);
          display: flex;
          flex-direction: column;
          justify-content: space-between;
        }

        .product-name {
          cursor: pointer;
        }

        .product-description {
          display: block;
          text-overflow: ellipsis;
          word-wrap: break-word;
          overflow: hidden;
          line-height: 1.4em;
          max-height: ${1.4 * 5}em;
        }

        .price-remove-cart-btn {
          display: flex;
          align-items: center;
          align-self: flex-end;
          justify-content: flex-end;
          width: 30%;
        }

        .product-price {
          font-size: 1.2rem;
        }

        .remove-cart-btn {
          cursor: pointer;
          width: 100px;
          height: 25px;
          border: none;
          font-size: 0.6rem;
          margin: 10px 20px;
          background: #bf4141;
          color: white;
          border-radius: 6px;
        }

        .remove-cart-btn:hover {
          background: #ab0f0f;
        }

        .cart-info {
          float: right;
          transform: translateY(-20px);
          font-size: 1.3rem;
        }
      `}</style>
    </React.Fragment>
  );
};

export default CartPage;

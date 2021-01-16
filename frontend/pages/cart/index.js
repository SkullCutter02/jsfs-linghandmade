import React, { useContext } from "react";

import Layout from "../../components/Layout";
import { CartContext } from "../../context/CartContext";
import spinner from "../../utils/spinner";

const CartPage = () => {
  const cartContext = useContext(CartContext);

  const removeFromCart = (cartItem) => {
    if (cartContext) {
      cartContext.removeItem(cartItem);
    }
  };

  return (
    <React.Fragment>
      <Layout>
        {cartContext ? (
          cartContext.cartItems.map((cartItem) => (
            <div>
              <p>{cartItem.name}</p>
              <button onClick={() => removeFromCart(cartItem)}>
                Remove from Cart
              </button>
            </div>
          ))
        ) : (
          <img className="spinner" src={spinner} alt="spinner" />
        )}
      </Layout>

      <style jsx>{`
        .spinner {
          display: block;
          margin: 0 auto;
          width: 200px;
        }
      `}</style>
    </React.Fragment>
  );
};

export default CartPage;

import React, { createContext, useState, useEffect } from "react";

export const CartContext = createContext(null);

export const CartProvider = (props) => {
  const [state, setState] = useState({
    setItems: function (item) {
      setState((old) => ({ ...old, cartItems: [...old.cartItems, item] }));
    },
    removeItems: function (item) {
      setState((old) => {
        const arr = old.cartItems.filter(
          (cartItem) => item.name !== cartItem.name
        );
        ({ ...old, cartItems: arr });
      });
    },
    cartItems: [],
  });

  useEffect(() => {
    const cartItems = localStorage.getItem("cartItems");

    if (cartItems) {
      setState({
        ...state,
        cartItems: JSON.parse(cartItems),
      });
    }
  }, []);

  useEffect(() => {
    if (state.cartItems) {
      localStorage.setItem("cartItems", JSON.stringify(state.cartItems));
    }
  }, [state]);

  return (
    <CartContext.Provider value={state}>{props.children}</CartContext.Provider>
  );
};

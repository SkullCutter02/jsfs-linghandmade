import React, { createContext, useState, useEffect } from "react";

const CartContext = createContext(null);

export const CartProvider = (props) => {
  const [state, setState] = useState({
    setItems: (item) =>
      setState({ ...state, cartItems: [...state.cartItems, item] }),
    cartItems: [],
  });

  useEffect(() => {
    const cartItems = localStorage.getItem("cartItems");

    if (cartItems) {
      setState({ ...state, cartItems: cartItems });
    }
  }, []);

  useEffect(() => {
    if (state.cartItems) {
      localStorage.setItem("cartItems", state.cartItems);
    }
  }, [state]);

  return (
    <CartContext.Provider value={state}>{props.children}</CartContext.Provider>
  );
};

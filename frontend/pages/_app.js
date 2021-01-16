import React from "react";

import { ProductsProvider } from "../context/ProductsContext";
import { CartProvider } from "../context/CartContext";

import "../styles.css";
import "@fortawesome/fontawesome-svg-core/styles.css";

export default function MyApp({ Component, pageProps }) {
  return (
    <ProductsProvider>
      <CartProvider>
        <Component {...pageProps} />
      </CartProvider>
    </ProductsProvider>
  );
}

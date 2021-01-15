import React from "react";
import { Provider } from "../context/context";
import "../styles.css";

export default function MyApp({ Component, pageProps }) {
  return (
    <Provider>
      <Component {...pageProps} />
    </Provider>
  );
}

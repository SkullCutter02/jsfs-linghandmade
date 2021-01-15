import React, { Component } from "react";

import host from "../utils/host";

export const ProductsContext = React.createContext(undefined);

export class ProductsProvider extends Component {
  state = {};

  componentDidMount() {
    fetch(`${host}/products`)
      .then((res) => res.json())
      .then((data) => this.setState({ data }))
      .catch((err) => console.log(err));
  }

  render() {
    return (
      <ProductsContext.Provider value={this.state}>
        {this.props.children}
      </ProductsContext.Provider>
    );
  }
}

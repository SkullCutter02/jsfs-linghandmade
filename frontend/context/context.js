import React, { Component } from "react";

import host from "../utils/host";

export const Context = React.createContext(undefined);

export class Provider extends Component {
  state = {};

  componentDidMount() {
    fetch(`${host}/products`)
      .then((res) => res.json())
      .then((data) => this.setState({ data }))
      .catch((err) => console.log(err));
  }

  render() {
    return (
      <Context.Provider value={this.state}>
        {this.props.children}
      </Context.Provider>
    );
  }
}

import React, { Component } from "react";

export const Context = React.createContext(undefined);

export class Provider extends Component {
  state = {};

  componentDidMount() {
    fetch("http://localhost:1337/products")
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

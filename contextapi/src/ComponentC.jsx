import React, { Component } from "react";
import ThemeContext from "./ThemeContext";

export class ComponentC extends Component {
  render() {
    return <div className={this.context.theme}>Component C</div>;
  }
}
ComponentC.contextType = ThemeContext;
export default ComponentC;

import React, { Component } from "react";
import "../cell.css";

class Cell extends Component {
  render() {
    if (this.props.alive === true) {
      var colour = "Square2";
    } else {
      colour = "Square1";
    }
    return (
      <button
        className={colour}
        onClick={() => this.props.onCellClick(this.props.cell)}
      ></button>
    );
  }
}

export default Cell;

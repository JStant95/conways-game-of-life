import React, { Component } from "react";
import "../index.css";

class Cell extends Component {
  render() {
    return (
      <div
        className={this.props.cellClass}
        id={this.props.id}
        onClick={() => this.props.onCellClick(this.props.cell)}
      />
    );
  }
}

export default Cell;

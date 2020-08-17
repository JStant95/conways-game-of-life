import React, { Component } from "react";
import "../css/index.css";

class Cell extends Component {
  render() {
    return (
      <div
        className={this.props.cellClass}
        id={this.props.id}
        onClick={() => this.props.onCellClick(this.props.row, this.props.col)}
      />
    );
  }
}

export default Cell;

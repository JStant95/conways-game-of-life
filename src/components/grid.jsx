import React, { Component } from "react";
import Cell from "./cell";
import "../css/index.css";

class Grid extends Component {
  render() {
    const width = this.props.cols * 16;
    var rowsArr = [];

    var cellClass = "";
    for (var i = 0; i < this.props.rows; i++) {
      for (var j = 0; j < this.props.cols; j++) {
        let cellId = i + "_" + j;

        cellClass = this.props.gridFull[i][j] ? "cell on" : "cell off";
        rowsArr.push(
          <Cell
            cellClass={cellClass}
            key={cellId}
            cellId={cellId}
            row={i}
            col={j}
            onCellClick={this.props.onCellClick}
          />
        );
      }
    }
    return (
      <div className="grid" style={{ width: width }}>
        {rowsArr}
      </div>
    );
  }
}

export default Grid;

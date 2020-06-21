import React, { Component } from "react";
import Cell from "./cell";

class Row extends Component {
  constructor(props) {
    super(props);
    this.state = {
      num: this.props.num,
      cells: [
        { id: 1 },
        { id: 2 },
        { id: 3 },
        { id: 4 },
        { id: 5 },
        { id: 6 },
        { id: 7 },
        { id: 8 },
        { id: 9 },
        { id: 10 },
        { id: 11 },
        { id: 12 },
        { id: 13 },
        { id: 14 },
        { id: 15 },
        { id: 16 },
        { id: 17 },
        { id: 18 },
        { id: 19 },
        { id: 20 },
      ],
    };
  }
  render() {
    return (
      <div>
        {this.state.cells.map((cell) => (
          <Cell key={cell.id} num={cell.id} />
        ))}
      </div>
    );
  }
}

export default Row;

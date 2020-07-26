import React, { Component } from "react";
import Cell from "./cell";

class Row extends Component {
  constructor(props) {
    super(props);
    this.state = {
      num: this.props.num,
      cells: [
        { id: 1, alive: false },
        { id: 2, alive: false },
        { id: 3, alive: false },
        { id: 4, alive: false },
        { id: 5, alive: false },
        { id: 6, alive: false },
        { id: 7, alive: false },
        { id: 8, alive: false },
        { id: 9, alive: false },
        { id: 10, alive: false },
        { id: 11, alive: false },
        { id: 12, alive: false },
        { id: 13, alive: false },
        { id: 14, alive: false },
        { id: 15, alive: false },
        { id: 16, alive: false },
        { id: 17, alive: false },
        { id: 18, alive: false },
        { id: 19, alive: false },
        { id: 20, alive: false },
        { id: 21, alive: false },
        { id: 22, alive: false },
        { id: 23, alive: false },
        { id: 24, alive: false },
        { id: 25, alive: false },
        { id: 26, alive: false },
        { id: 27, alive: false },
        { id: 28, alive: false },
        { id: 29, alive: false },
        { id: 30, alive: false },
      ],
    };
  }

  handleCellClick = (cell) => {
    const cells = [...this.state.cells];
    const index = cells.indexOf(cell);
    // cells[index] = { ...cell };
    if (cells[index].alive === false) {
      cells[index].alive = true;
    } else {
      cells[index].alive = false;
    }
    // this.setState({ cells });
    // if (this.state.alive === false) {
    //   this.setState({ alive: true });
    // } else {
    //   this.setState({ alive: false });
    // }
  };

  render() {
    return (
      <div>
        {this.state.cells.map((cell) => (
          <Cell key={cell.id} cell={cell} onCellClick={this.handleCellClick} />
        ))}
      </div>
    );
  }
}

export default Row;

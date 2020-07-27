import React, { Component } from "react";
import Row from "./row";
import Ticks from "./ticks";

class Game extends Component {
  state = {
    game: true,
    ticks: 0,
    grid: [],
  };

  incrementTicks = () => {
    let ticks = this.state.ticks;
    ticks += 1;
    this.setState({ ticks });
  };

  resetTicks = () => {
    this.setState({ ticks: 0 });
  };

  showCells = (data) => {
    this.state.grid.push(data);
  };

  loadRows() {
    const board = [];
    for (let i = 1; i < 26; i++) {
      board.push(
        <div>
          <Row
            key={i}
            num={i}
            ticks={this.state.ticks}
            showCells={this.showCells}
          />
        </div>
      );
    }

    return board;
  }
  render() {
    console.log(this.state.grid);
    return (
      <div>
        <h1>Conway's Game of Life</h1>
        {this.loadRows()}
        <Ticks
          key={1}
          incrementTicks={this.incrementTicks}
          resetTicks={this.resetTicks}
        />
        <h2>Ticks: {this.state.ticks}</h2>
      </div>
    );
  }
}

export default Game;

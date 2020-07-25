import React, { Component } from "react";
import Row from "./row";
import Ticks from "./ticks";

class Game extends Component {
  state = {
    game: true,
    ticks: 0,
  };

  incrementTicks = () => {
    let ticks = this.state.ticks;
    ticks += 1;
    this.setState({ ticks });
  };

  resetTicks = () => {
    this.setState({ ticks: 0 });
  };

  loadRows() {
    const board = [];
    for (let i = 1; i < 26; i++) {
      board.push(
        <div>
          <Row key={i} num={i} />
        </div>
      );
    }

    return board;
  }
  render() {
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

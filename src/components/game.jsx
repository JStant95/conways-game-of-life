import React, { Component } from "react";
import Row from "./row";
import Ticks from "./ticks";

class Game extends Component {
  state = {
    game: true,
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
          stopTicks={this.stopTicks}
          startTicks={this.startTicks}
          stopped={this.state.stopped}
        />
        <h2>Ticks: </h2>
      </div>
    );
  }
}

export default Game;

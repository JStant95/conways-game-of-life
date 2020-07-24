import React, { Component } from "react";
import Row from "./row";

class Game extends Component {
  state = {
    game: true,
    paused: true,
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
      </div>
    );
  }
}

export default Game;

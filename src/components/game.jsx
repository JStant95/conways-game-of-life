import React, { Component } from "react";

class Game extends Component {
  state = {
    game: true,
    paused: true,
  };
  render() {
    return (
      <div>
        <h1>Conway's Game of Life</h1>
      </div>
    );
  }
}

export default Game;

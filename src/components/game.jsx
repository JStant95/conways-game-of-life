import React, { Component } from "react";
import Row from "./row";

class Game extends Component {
  state = {
    game: true,
    timer: "",
  };

  componentDidUpdate() {
    if (this.state.stopped === false) {
      this.timerId = setInterval(() => console.log("tick"), 2000);
    } else {
      clearInterval(this.timerId);
      console.log("stopped");
    }
  }

  startTicks = () => {
    this.setState({ stopped: false });
  };

  stopTicks = () => {
    this.setState({ stopped: true });
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
        <button onClick={this.startTicks}>Start</button>
        <button onClick={this.stopTicks}>Stop</button>
      </div>
    );
  }
}

export default Game;

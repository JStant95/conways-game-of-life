import React, { Component } from "react";
import Row from "./row";

class Game extends Component {
  state = {
    game: true,
    timer: "",
    stopped: true,
  };

  ticks = () => {
    if (this.state.stopped === false) {
      let timer = setInterval(() => console.log("Tick"), 2000);
      this.setState({ timer: timer });
    } else {
      clearInterval(this.state.timer);
      console.log("stopped");
    }
  };

  startTicks = () => {
    this.setState({ stopped: false });
    this.ticks();
  };

  stopTicks = () => {
    this.setState({ stopped: true });
    this.ticks();
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
        <h2>Ticks: </h2>
      </div>
    );
  }
}

export default Game;

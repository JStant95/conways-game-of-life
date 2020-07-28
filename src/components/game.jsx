import React, { Component } from "react";
import Grid from "./grid";
import Ticks from "./ticks";

class Game extends Component {
  constructor() {
    super();
    this.rows = 30;
    this.cols = 50;

    this.state = {
      game: true,
      ticks: 0,
      gridFull: Array(this.rows)
        .fill()
        .map(() => Array(this.cols).fill(false)),
    };
  }

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

  render() {
    return (
      <div>
        <h1>Conway's Game of Life</h1>
        <Grid
          gridFull={this.state.gridFull}
          rows={this.rows}
          cols={this.cols}
        />
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

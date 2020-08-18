import React, { Component } from "react";
import Grid from "./grid";
import Ticks from "./ticks";
import "../css/index.css";

class Game extends Component {
  constructor() {
    super();
    this.rows = 30;
    this.cols = 50;
    this.toBeChanged = [];

    this.state = {
      game: true,
      ticks: 0,
      gridFull: Array(this.rows)
        .fill()
        .map(() => Array(this.cols).fill(false)),
    };
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.ticks !== this.state.ticks) {
      this.gameFlow();
    }
  }

  gameFlow() {
    this.toBeChanged = [];
    for (var i = 0; i < 30; i++) {
      for (var j = 0; j < 50; j++) {
        let neighbours = this.findNeighbours(i, j);
        let liveNeighbours = neighbours.filter((cell) => cell === true).length;
        this.deadOrAlive(i, j, liveNeighbours);
      }
    }
    this.changeIt();
  }

  findNeighbours(row, column) {
    let cells = [...this.state.gridFull];
    if (row === 0 && column === 0) {
      return [
        cells[row + 1][column],
        cells[row + 1][column + 1],
        cells[row][column + 1],
      ];
    } else if (row === 29 && column === 0) {
      return [
        cells[row - 1][column],
        cells[row - 1][column + 1],
        cells[row][column + 1],
      ];
    } else if (row === 0 && column === 49) {
      return [
        cells[row + 1][column],
        cells[row + 1][column - 1],
        cells[row][column - 1],
      ];
    } else if (row === 29 && column === 49) {
      return [
        cells[row - 1][column],
        cells[row - 1][column - 1],
        cells[row][column - 1],
      ];
    } else if (row === 0 && column > 0 && column < 49) {
      return [
        cells[row][column - 1],
        cells[row][column + 1],
        cells[row + 1][column - 1],
        cells[row + 1][column],
        cells[row + 1][column + 1],
      ];
    } else if (row === 29 && column > 0 && column < 49) {
      return [
        cells[row][column - 1],
        cells[row][column + 1],
        cells[row - 1][column - 1],
        cells[row - 1][column],
        cells[row - 1][column + 1],
      ];
    } else if (column === 49 && row > 0 && row < 29) {
      return [
        cells[row + 1][column],
        cells[row - 1][column],
        cells[row][column - 1],
        cells[row - 1][column - 1],
        cells[row + 1][column - 1],
      ];
    } else if (column === 0 && row > 0 && row < 29) {
      return [
        cells[row + 1][column],
        cells[row - 1][column],
        cells[row][column + 1],
        cells[row - 1][column + 1],
        cells[row + 1][column + 1],
      ];
    } else {
      return [
        cells[row + 1][column],
        cells[row + 1][column + 1],
        cells[row + 1][column - 1],
        cells[row - 1][column + 1],
        cells[row - 1][column],
        cells[row - 1][column - 1],
        cells[row][column + 1],
        cells[row][column - 1],
      ];
    }
  }

  deadOrAlive(row, column, liveNeighbours) {
    let cells = [...this.state.gridFull];
    if (cells[row][column] === false) {
      if (liveNeighbours === 3) {
        this.toBeChanged.push([row, column]);
      }
    } else {
      if (liveNeighbours > 3 || liveNeighbours < 2) {
        this.toBeChanged.push([row, column]);
      }
    }
  }

  changeIt() {
    let cells = [...this.state.gridFull];
    this.toBeChanged.forEach(
      (num) => (cells[num[0]][num[1]] = !cells[num[0]][num[1]])
    );
    this.setState({ gridFull: cells });
  }

  incrementTicks = () => {
    let ticks = this.state.ticks;
    ticks += 1;
    this.setState({ ticks });
  };

  resetTicks = () => {
    this.setState({ ticks: 0 });
  };

  handleCellClick = (row, col) => {
    let gridCopy = [...this.state.gridFull];
    gridCopy[row][col] = !gridCopy[row][col];
    this.setState({
      gridFull: gridCopy,
    });
  };

  resetBoard = () => {
    let freshBoard = Array(this.rows)
      .fill()
      .map(() => Array(this.cols).fill(false));
    this.setState({ gridFull: freshBoard });
  };

  render() {
    return (
      <div className="container">
        <h1>Conway's Game of Life</h1>
        <Grid
          gridFull={this.state.gridFull}
          rows={this.rows}
          cols={this.cols}
          onCellClick={this.handleCellClick}
        />
        <Ticks
          key={1}
          incrementTicks={this.incrementTicks}
          resetTicks={this.resetTicks}
          resetBoard={this.resetBoard}
        />
        <h2>Ticks: {this.state.ticks}</h2>
      </div>
    );
  }
}

export default Game;

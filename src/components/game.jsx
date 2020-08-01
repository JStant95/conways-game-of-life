import React, { Component } from "react";
import Grid from "./grid";
import Ticks from "./ticks";
import "../index.css";

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
    let cells = [...this.state.gridFull];
    this.toBeChanged = [];
    for (var i = 0; i < 30; i++) {
      for (var j = 0; j < 50; j++) {
        if (i === 0 && j === 0) {
          let neighbours = [
            cells[i + 1][j],
            cells[i + 1][j + 1],
            cells[i][j + 1],
          ];
          let liveNeighbours = neighbours.filter((cell) => cell === true)
            .length;
          this.deadOrAlive(i, j, liveNeighbours);
        } else if (i === 29 && j === 0) {
          let neighbours = [
            cells[i - 1][j],
            cells[i - 1][j + 1],
            cells[i][j + 1],
          ];
          let liveNeighbours = neighbours.filter((cell) => cell === true)
            .length;
          this.deadOrAlive(i, j, liveNeighbours);
        } else if (i === 0 && j === 49) {
          let neighbours = [
            cells[i + 1][j],
            cells[i + 1][j - 1],
            cells[i][j - 1],
          ];
          let liveNeighbours = neighbours.filter((cell) => cell === true)
            .length;
          this.deadOrAlive(i, j, liveNeighbours);
        } else if (i === 29 && j === 49) {
          let neighbours = [
            cells[i - 1][j],
            cells[i - 1][j - 1],
            cells[i][j - 1],
          ];
          let liveNeighbours = neighbours.filter((cell) => cell === true)
            .length;
          this.deadOrAlive(i, j, liveNeighbours);
        } else if (i === 0 && j > 0 && j < 49) {
          let neighbours = [
            cells[i][j - 1],
            cells[i][j + 1],
            cells[i + 1][j - 1],
            cells[i + 1][j],
            cells[i + 1][j + 1],
          ];
          let liveNeighbours = neighbours.filter((cell) => cell === true)
            .length;
          this.deadOrAlive(i, j, liveNeighbours);
        } else if (i === 29 && j > 0 && j < 49) {
          let neighbours = [
            cells[i][j - 1],
            cells[i][j + 1],
            cells[i - 1][j - 1],
            cells[i - 1][j],
            cells[i - 1][j + 1],
          ];
          let liveNeighbours = neighbours.filter((cell) => cell === true)
            .length;
          this.deadOrAlive(i, j, liveNeighbours);
        } else if (j === 49 && i > 0 && i < 29) {
          let neighbours = [
            cells[i + 1][j],
            cells[i - 1][j],
            cells[i][j - 1],
            cells[i - 1][j - 1],
            cells[i + 1][j - 1],
          ];
          let liveNeighbours = neighbours.filter((cell) => cell === true)
            .length;
          this.deadOrAlive(i, j, liveNeighbours);
        } else if (j === 0 && i > 0 && i < 29) {
          let neighbours = [
            cells[i + 1][j],
            cells[i - 1][j],
            cells[i][j + 1],
            cells[i - 1][j + 1],
            cells[i + 1][j + 1],
          ];
          let liveNeighbours = neighbours.filter((cell) => cell === true)
            .length;
          this.deadOrAlive(i, j, liveNeighbours);
        } else {
          let neighbours = [
            cells[i + 1][j],
            cells[i + 1][j + 1],
            cells[i + 1][j - 1],
            cells[i - 1][j + 1],
            cells[i - 1][j],
            cells[i - 1][j],
            cells[i][j + 1],
            cells[i][j - 1],
          ];
          let liveNeighbours = neighbours.filter((cell) => cell === true)
            .length;
          this.deadOrAlive(i, j, liveNeighbours);
        }
      }
    }
    this.changeIt();
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

  render() {
    return (
      <div>
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
        />
        <h2>Ticks: {this.state.ticks}</h2>
      </div>
    );
  }
}

export default Game;

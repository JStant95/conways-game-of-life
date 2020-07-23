import React, { Component } from "react";
import Row from "./row";

class Game extends Component {
  state = {
    game: true,
    paused: true,
    rows: [],
  };

  loadRows() {
    for (let i = 1; i < 11; i++) {
      this.state.rows.push(
        <div>
          <Row key={i} num={i} />
        </div>
      );
    }
    console.log("wagwan");
  }
  render() {
    {
      {
        this.loadRows();
      }
    }
    return (
      <div>
        <h1>Conway's Game of Life</h1>
        {this.state.rows}
      </div>
      /* <Row key={1} num={1} />
        <div></div>
        <Row key={2} num={2} />
        <div></div>
        <Row key={3} num={3} />
        <div></div>
        <Row key={4} num={4} />
        <div></div>
        <Row key={5} num={5} />
        <div></div>
        <Row key={6} num={6} />
        <div></div>
        <Row key={7} num={7} />
        <div></div>
        <Row key={8} num={8} />
        <div></div>
        <Row key={9} num={9} />
        <div></div>
        <Row key={10} num={10} />
        <div></div>
        <Row key={11} num={11} />
        <div></div>
        <Row key={12} num={12} />
        <div></div>
        <Row key={13} num={13} />
        <div></div>
        <Row key={14} num={14} />
        <div></div>
        <Row key={15} num={15} />
        <div></div>
        <Row key={16} num={16} />
        <div></div>
        <Row key={17} num={17} />
        <div></div>
        <Row key={18} num={18} />
        <div></div>
        <Row key={19} num={19} />
        <div></div>
        <Row key={20} num={20} /> */
    );
  }
}

export default Game;

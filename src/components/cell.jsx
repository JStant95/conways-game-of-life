import React, { Component } from "react";
import "../cell.css";

class Cell extends Component {
  state = {
    alive: false,
    num: this.props.num,
  };

  cellClick = () => {
    if (this.state.alive === false) {
      this.setState({ alive: true });
    } else {
      this.setState({ alive: false });
    }
  };

  render() {
    if (this.state.alive === true) {
      var colour = "Square2";
    } else {
      colour = "Square1";
    }
    return <button className={colour} onClick={this.cellClick}></button>;
  }
}

export default Cell;

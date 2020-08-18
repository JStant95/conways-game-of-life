import React, { Component } from "react";
import "../css/index.css";

class Ticks extends Component {
  state = {
    timer: "",
  };

  startTicks = () => {
    clearInterval(this.state.timer);
    let timerId = setInterval(() => this.props.incrementTicks(), 1000);
    this.setState({ timer: timerId });
  };

  stopTicks = () => {
    clearInterval(this.state.timer);
    this.props.resetTicks();
    this.props.resetBoard();
  };

  pauseTicks = () => {
    clearInterval(this.state.timer);
  };

  render() {
    console.log(this.props.speed);
    return (
      <div>
        <button className="button1" onClick={this.startTicks}>
          Start
        </button>
        <button className="button1" onClick={this.pauseTicks}>
          Pause
        </button>
        <button className="button1" onClick={this.stopTicks}>
          Clear
        </button>
      </div>
    );
  }
}

export default Ticks;

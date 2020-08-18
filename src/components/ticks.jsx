import React, { Component } from "react";
import "../css/index.css";

class Ticks extends Component {
  state = {
    timer: "",
    paused: true,
  };

  startTicks = () => {
    clearInterval(this.state.timer);
    let timerId = setInterval(() => this.props.incrementTicks(), 1000);
    this.setState({ timer: timerId });
    this.setState({ paused: false });
  };

  stopTicks = () => {
    clearInterval(this.state.timer);
    this.props.resetTicks();
    this.props.resetBoard();
  };

  pauseTicks = () => {
    clearInterval(this.state.timer);
    this.setState({ paused: true });
  };

  render() {
    return (
      <div>
        {this.state.paused && (
          <button className="button1" onClick={this.startTicks}>
            Start
          </button>
        )}
        {!this.state.paused && (
          <button className="button1" onClick={this.pauseTicks}>
            Pause
          </button>
        )}
        <button className="button1" onClick={this.stopTicks}>
          Clear
        </button>
      </div>
    );
  }
}

export default Ticks;

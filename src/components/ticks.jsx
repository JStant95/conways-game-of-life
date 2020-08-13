import React, { Component } from "react";

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
  };

  pauseTicks = () => {
    clearInterval(this.state.timer);
  };

  render() {
    console.log(this.props.speed);
    return (
      <div>
        <button onClick={this.startTicks}>Start</button>
        <button onClick={this.pauseTicks}>Pause</button>
        <button onClick={this.stopTicks}>Clear</button>
      </div>
    );
  }
}

export default Ticks;

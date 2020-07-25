import React, { Component } from "react";

class Ticks extends Component {
  state = {
    timer: "",
  };

  startTicks = () => {
    clearInterval(this.state.timer);
    let timerId = setInterval(() => this.props.incrementTicks(), 2000);
    this.setState({ timer: timerId });
  };

  stopTicks = () => {
    clearInterval(this.state.timer);
    this.props.resetTicks();
  };

  render() {
    return (
      <div>
        <button onClick={this.startTicks}>Start</button>
        <button onClick={this.stopTicks}>Stop</button>
      </div>
    );
  }
}

export default Ticks;

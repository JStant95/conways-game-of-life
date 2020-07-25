import React, { Component } from "react";

class Ticks extends Component {
  state = {};

  componentDidUpdate() {
    let timerId;
    if (this.state.stopped === false) {
      timerId = setInterval(() => this.props.incrementTicks(), 2000);
    } else {
      clearInterval(timerId);
      console.log("stopped");
    }
  }

  startTicks = () => {
    this.setState({ stopped: false });
  };

  stopTicks = () => {
    this.setState({ stopped: true });
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

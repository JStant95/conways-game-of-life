import React, { Component } from "react";

class Ticks extends Component {
  state = {
    timer: "",
  };

  ticks = () => {
    if (this.state.stopped === false) {
      let timerId = setInterval(() => this.props.incrementTicks(), 2000);
      this.setState({ timer: timerId });
    } else {
      clearInterval(this.state.timer);
      console.log("stopped");
    }
  };

  startTicks = () => {
    this.setState({ stopped: false });
    this.ticks();
  };

  stopTicks = () => {
    this.setState({ stopped: true });
    this.ticks();
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

import React, { Component } from "react";

class Ticks extends Component {
  state = {
    timer: "",
  };

  componentDidUpdate() {
    if (this.state.stopped === false) {
      this.timerId = setInterval(() => console.log("tick"), 2000);
    } else {
      clearInterval(this.timerId);
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

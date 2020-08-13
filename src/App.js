import React, { Component } from "react";
import Game from "./components/game";
import "./App.css";

class App extends Component {
  state = {
    speed: 1000,
  };

  handleChange = (event) => {
    this.setState({ speed: event.target.value });
  };

  render() {
    console.log(this.state.speed);
    return (
      <div className="App">
        <Game speed={this.state.speed} />
        <label for="speed">Select Speed:</label>

        <select onChange={this.handleChange} name="speed" id="speed">
          <option value="2000">Slow</option>
          <option value="1000" selected="selected">
            Medium
          </option>
          <option value="500">Fast</option>
        </select>
      </div>
    );
  }
}

export default App;

import React, { Component } from "react";
import Game from "./components/game";
import "./App.css";

class App extends Component {
  state = {
    speed: 1000,
  };

  // handleChange = () => {
  //   this.setState({ speed: event.target.value });
  // };
  render() {
    return (
      <div className="App">
        <Game />
        <label for="speed">Select Speed:</label>

        <select onChange={this.handleChange} name="speed" id="speed">
          <option value="500">Slow</option>
          <option value="1000" selected="selected">
            Medium
          </option>
          <option value="2000">Fast</option>
        </select>
      </div>
    );
  }
}

export default App;

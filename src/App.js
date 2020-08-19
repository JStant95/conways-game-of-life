import React, { Component } from "react";
import Game from "./components/game";
import "./App.css";
import "./css/index.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Game />
      </div>
    );
  }
}

export default App;

import React, { Component } from "react";
import "./App.scss";

import { Navigation } from "./components/Navigation";

class App extends Component {
  state = {
    menuVisible: true
  };

  handleClick = () => {
    this.setState({ menuVisible: !this.state.menuVisible });
  };

  render() {
    return (
      <div className="App">
        <Navigation
          menuVisible={this.state.menuVisible}
          handleClick={() => this.handleClick()}
        />
      </div>
    );
  }
}

export default App;

import React, { Component } from "react";
import MouseCapture from "./components/widgets/mouseCapture";

import "../styles/App.less";

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <MouseCapture></MouseCapture>
      </React.Fragment>
    );
  }
}

export default App;

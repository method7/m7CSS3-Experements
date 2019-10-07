import React, { Component } from "react";
import M73d from "./components/widgets/m73d";
import windowDimensions from "./components/hocs/windowDimensions";
import mouseCapture from "./components/hocs/mouseCapture";

import "../styles/App.less";

class App extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <M73d viewPort={this.props.viewPort} mouse={this.props.mouse}></M73d>
    );
  }
}

export default mouseCapture(windowDimensions(App));

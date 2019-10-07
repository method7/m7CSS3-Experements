import React, { Component } from "react";
import M73d from "./components/widgets/m73d";
import windowDimensions from "./components/hocs/windowDimensions";
import mouseCapture from "./components/hocs/mouseCapture";
import "../styles/App.less";

const styles = {
  height: "380px",
  width: "550px",
  position: "absolute"
};

class App extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div style={styles}>
        <M73d viewPort={this.props.viewPort} mouse={this.props.mouse}></M73d>
      </div>
    );
  }
}
export default mouseCapture(windowDimensions(App));

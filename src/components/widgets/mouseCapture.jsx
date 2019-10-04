import React, { Component } from "react";

const styles = {
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  minHeight: "100vh",
  color: "white"
};

class MouseCapture extends Component {
  constructor(props) {
    super(props);
    this.state = {
      mouse: {
        x: 0,
        y: 0,
        button: ""
      }
    };
    this.handleMouseEnter = this.handleMouseEnter.bind(this);
    this.handleMouseMove = this.handleMouseMove.bind(this);
    this.handleMouseLeave = this.handleMouseLeave.bind(this);
    this.handleMouseUp = this.handleMouseUp.bind(this);
    this.handleMouseDown = this.handleMouseDown.bind(this);
  }

  handleMouseEnter(e) {
    this.setMouseState(e.clientX, e.clientY);
  }

  handleMouseMove(e) {
    this.setMouseState(e.nativeEvent.clientX, e.nativeEvent.clientY);
  }

  handleMouseLeave(e) {
    this.setMouseState(e.clientX, e.clientY);
  }

  handleMouseUp(e) {
    this.setMouseState(e.clientX, e.clientY, "You released the mouse button.");
  }

  handleMouseDown(e) {
    this.setMouseState(
      e.nativeEvent.clientX,
      e.nativeEvent.clientY,
      "The mouse button is held down"
    );
  }

  setMouseState(x, y, button) {
    this.setState({
      mouse: {
        x: !x ? this.state.mouse.x : x,
        y: !y ? this.state.mouse.y : y,
        button: !button ? this.state.mouse.button : button
      }
    });
  }

  render() {
    return (
      <div
        style={styles}
        onMouseEnter={this.handleMouseEnter}
        onMouseMove={this.handleMouseMove}
        onMouseLeave={this.handleMouseLeave}
        onMouseUp={this.handleMouseUp}
        onMouseDown={this.handleMouseDown}
      >
        mouse: x: {this.state.mouse.x}, y: {this.state.mouse.y}, button{" "}
        {this.state.mouse.button}
      </div>
    );
  }
}
export default MouseCapture;

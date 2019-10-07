import React from "react";

const mouseCapture = WrappedComponent => {
  return class extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        mouse: {
          x: 0,
          y: 0,
          button: ""
        },
        tsbBoxCss: {
          boxShadow: ""
        },
        tsbTextCss: {
          textShadow: ""
        },
        tsbSpotCss: {
          backgroundPosition: ""
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

    handleMouseLeave() {
      this.setMouseState(0, 0);
    }

    handleMouseUp(e) {
      this.setMouseState(
        e.clientX,
        e.clientY,
        "You released the mouse button."
      );
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
          x: x,
          y: y,
          button: !button ? this.state.mouse.button : button
        }
      });
    }

    render() {
      return (
        <div
          onMouseEnter={this.handleMouseEnter}
          onMouseMove={this.handleMouseMove}
          onMouseLeave={this.handleMouseLeave}
          onMouseUp={this.handleMouseUp}
          onMouseDown={this.handleMouseDown}
        >
          <WrappedComponent {...this.props} mouse={this.state.mouse} />
        </div>
      );
    }
  };
};

export default mouseCapture;

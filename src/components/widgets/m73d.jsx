import React, { Component } from "react";
import PropTypes from "prop-types";

const styles = {
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  color: "white"
};

class M73d extends Component {
  boxShadowCss = mouse => {
    var xm = mouse.x - 300;
    var ym = mouse.y - 170;
    return mouse.x === 0 || mouse.y === 0
      ? "black 0px -35px 37px"
      : "0 " + -ym + "px " + (this.shadowDepth(xm, ym) + 30) + "px black";
  };
  textShadowCss = (mouse, viewPort) => {
    var xm = mouse.x - 300;
    var ym = mouse.y - 175;

    return mouse.x === 0 || mouse.y === 0
      ? "black 7px -35px 17px"
      : -xm +
          "px " +
          -ym +
          "px " +
          (this.shadowDepth(xm, ym) + 10) +
          "px black";
  };
  backgroundPositionCss = mouse => {
    return mouse.x === 0 || mouse.y === 0
      ? "-250px -200px"
      : mouse.x - 550 + "px " + (mouse.y - 380) + "px";
  };

  shadowDepth = (xm, ym) => {
    return Math.round(Math.sqrt(xm * xm + ym * ym) / 4);
  };

  render() {
    const { viewPort, mouse } = this.props;
    return (
      <div id="text-shadow-box" style={styles}>
        <div className="wall">
          <div
            id="tsb-box"
            style={{ boxShadow: this.boxShadowCss(mouse) }}
          ></div>
          <p
            id="tsb-text"
            style={{ textShadow: this.textShadowCss(mouse, viewPort) }}
          >
            method7.co.uk
          </p>
          <div>
            <p>
              Window size: w:{viewPort.width} h:{viewPort.height}
              <br />
              Mouse: x: {mouse.x} y:{mouse.y}
            </p>
          </div>
        </div>
        <div
          id="tsb-spot"
          style={{
            backgroundPosition: this.backgroundPositionCss(mouse, viewPort)
          }}
        ></div>
      </div>
    );
  }
}

M73d.propTypes = {
  viewPort: PropTypes.object.isRequired,
  mouse: PropTypes.object.isRequired
};

export default M73d;

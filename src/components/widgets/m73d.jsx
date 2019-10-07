import React, { Component } from "react";
import PropTypes from "prop-types";

const styles = {
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  minHeight: "100vh",
  color: "white"
};

class M73d extends Component {
  constructor(props) {
    super(props);
    this.state = {
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
  }

  componentDidMount() {
    this.setDefaults();
  }

  setDefaults = () => {
    this.setState({
      tsbBoxCss: {
        boxShadow: "black 0px -35px 37px"
      },
      tsbTextCss: {
        textShadow: "black 7px -35px 17px"
      },
      tsbSpotCss: {
        backgroundPosition: "-307px -240px"
      }
    });
  };

  boxShadowCss = mouse => {
    var xm = mouse.x - 300;
    var ym = mouse.y - 175;
    return mouse.x === 0 || mouse.y === 0
      ? "black 0px -35px 37px"
      : "0 " + -ym + "px " + (this.shadowDepth(xm, ym) + 30) + "px black";
  };

  textShadowCss = mouse => {
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
    console.log(typeof mouse.x, mouse.x === 0 || mouse.y === 0);
    return mouse.x === 0 || mouse.y === 0
      ? "-307px -240px"
      : mouse.x - 600 + "px " + (mouse.y - 450) + "px";
  };

  shadowDepth = (xm, ym) => {
    return Math.round(Math.sqrt(xm * xm + ym * ym) / 4);
  };

  render() {
    const { viewPort, mouse } = this.props;
    console.log("M73d:mouse ", this.textShadowCss(mouse));
    return (
      <div id="text-shadow-box" style={styles}>
        <div className="wall">
          <div
            id="tsb-box"
            style={{ boxShadow: this.boxShadowCss(mouse) }}
          ></div>
          <p id="tsb-text" style={{ textShadow: this.textShadowCss(mouse) }}>
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
          style={{ backgroundPosition: this.backgroundPositionCss(mouse) }}
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

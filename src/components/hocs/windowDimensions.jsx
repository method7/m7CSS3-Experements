import React from "react";

const windowDimensions = WrappedComponent => {
  return class extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        viewPort: { width: 0, height: 0 }
      };
    }

    componentDidMount() {
      window.addEventListener("resize", this.updateWindowDimensions);
      this.updateWindowDimensions();
    }

    componentWillUnmount() {
      window.removeEventListener("resize", this.updateWindowDimensions);
    }

    updateWindowDimensions = () => {
      this.setState({
        viewPort: {
          width: Math.max(document.documentElement.clientWidth),
          height: Math.max(document.documentElement.clientHeight)
        }
      });
    };
    render() {
      return (
        <WrappedComponent {...this.props} viewPort={this.state.viewPort} />
      );
    }
  };
};

export default windowDimensions;

import React, { Component } from "react";
import Modal from "./components/modal/modal";
import Main from "./components/layout/main";
import "../styles/App.less";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      modalActive: false,
      viewPort: { width: 0, height: 0 }
    };
  }

  componentDidMount() {
    window.addEventListener("resize", this.setDimensions);
    this.setDimensions();
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.setDimensions);
  }

  render() {
    return (
      <React.Fragment>
        <Main
          setModalState={this.setModalState}
          navActive={this.state.navActive}
          viewPort={this.state.viewPort}
        />
        <Modal
          setModalState={this.setModalState}
          modalActive={this.state.modalActive}
          Content={this.state.modalContent}
        />
      </React.Fragment>
    );
  }

  setModalState = (bool, content) => {
    content = content || null;
    this.setState({ modalActive: bool, modalContent: content });
  };

  setDimensions = () => {
    this.setState({
      viewPort: {
        width: Math.max(document.documentElement.clientWidth),
        height: Math.max(document.documentElement.clientHeight)
      }
    });
  };
}

export default App;

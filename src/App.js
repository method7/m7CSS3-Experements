import React, { Component } from "react";
import Modal from "./components/modal/modal";
import Main from "./components/layout/main";
import "../styles/App.less";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      modalActive: false,
      activeView: { width: 0, height: 0 }
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
          onNavigate={this.navigate}
          setModalState={this.setModalState}
          navActive={this.state.navActive}
          activeView={this.state.activeView}
        />
        <Modal
          setModalState={this.setModalState}
          modalActive={this.state.modalActive}
          Content={this.state.modalContent}
        />
        <span>
          Window size: {this.state.activeView.width} x{" "}
          {this.state.activeView.height}
        </span>
      </React.Fragment>
    );
  }

  setModalState = (bool, content) => {
    content = content || null;
    this.setState({ modalActive: bool, modalContent: content });
  };

  setDimensions = () => {
    this.setState({
      activeView: {
        width: document.getElementById("page").offsetWidth,
        height: document.getElementById("page").offsetHeight
      }
    });
  };
}

export default App;

import React, { Component } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import GetStory from "../stories/getStory";
import Navigation from "../elements/navigation";
import * as util from "../utils.js";
import PropTypes from "prop-types";

class Main extends Component {
  constructor(props) {
    super(props);

    this.state = {
      story: "/",
      stories: util.myStories(),
      navActive: false,
      allowNavToClose: false
    };
  }

  componentDidMount() {
    const activePage = this.state.stories.filter(obj => {
      return obj.url === window.location.pathname;
    });

    if (activePage.length != 0) {
      this.setState({
        story: activePage[0].url
      });
    }
  }

  onNavigate = clicked => {
    if (clicked !== this.state.story) {
      this.setState({
        story: clicked,
        allowNavToClose: true
      });
    } else {
      this.toggleNav();
    }
  };

  toggleNav = () => {
    this.setState({ navActive: !this.state.navActive, allowNavToClose: false });
  };

  render() {
    const { setModalState, viewPort } = this.props;
    return (
      <Router>
        <div role="main" className="page" id="page">
          <button
            className="toggleNav"
            onClick={() => {
              this.toggleNav();
              return false;
            }}
          >
            {this.state.navActive ? "close Navigation" : "open Navigation"}
          </button>
          <section>
            <div className={this.state.navActive ? "nav" : "nav hide"}>
              <Navigation
                readStory={this.state.story}
                stories={this.state.stories}
                onNavigate={this.onNavigate}
                setModalState={setModalState}
                navActive={this.state.navActive}
                viewPort={viewPort}
              />
            </div>

            <GetStory
              viewPort={viewPort}
              setModalState={setModalState}
              toggleNav={this.toggleNav}
              onNavigate={this.onNavigate}
              readStory={this.state.story}
              stories={this.state.stories}
              navActive={this.state.navActive}
              allowNavToClose={this.state.allowNavToClose}
            />
          </section>
        </div>
      </Router>
    );
  }
}

Main.propTypes = {
  setModalState: PropTypes.func.isRequired,
  viewPort: PropTypes.object.isRequired
};
export default Main;

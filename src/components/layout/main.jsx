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
      closeNav: false
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

  navigate = clicked => {
    this.setState({
      story: clicked,
      closeNav: true
    });
  };

  setNavState = () => {
    this.setState({ navActive: !this.state.navActive, closeNav: false });
  };

  render() {
    const { setModalState, activeView } = this.props;
    return (
      <Router>
        <div role="main" className="page" id="page">
          <button
            className="toggleNav"
            onClick={() => {
              this.setNavState();
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
                onNavigate={this.navigate}
                setModalState={setModalState}
                navActive={this.state.navActive}
                activeView={activeView}
                setNavState={this.setNavState}
              />
            </div>

            <GetStory
              activeView={activeView}
              setModalState={setModalState}
              setNavState={this.setNavState}
              setCardState={this.setCardState}
              onNavigate={this.navigate}
              readStory={this.state.story}
              stories={this.state.stories}
              navActive={this.state.navActive}
              closeNav={this.state.closeNav}
            />
          </section>
        </div>
      </Router>
    );
  }
}

Main.propTypes = {
  setModalState: PropTypes.func.isRequired,
  activeView: PropTypes.object.isRequired
};
export default Main;

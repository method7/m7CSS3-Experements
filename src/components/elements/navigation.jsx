import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import PropTypes from "prop-types";

class Navigation extends Component {
  render() {
    const {
      stories,
      onNavigate,
      readStory,
      setModalState,
      navActive,
      viewPort
    } = this.props;

    const divStyle = {
      height: viewPort.height
    };

    return (
      <React.Fragment>
        <nav
          role="navigation"
          className={navActive ? "" : "hide"}
          style={divStyle}
        >
          <ol>
            {stories.map(story => (
              <li
                key={story.id}
                className={readStory === story.url ? "selected" : ""}
              >
                <NavLink
                  exact={true}
                  to={story.url}
                  onClick={() => onNavigate(story.url)}
                >
                  {story.title}
                </NavLink>
              </li>
            ))}
            <li aria-hidden="true">
              <NavLink to="badURL" onClick={() => onNavigate("badURL")}>
                404 page
              </NavLink>
            </li>
            <li aria-hidden="true">
              <a
                onClick={() => {
                  setModalState(true);
                  return false;
                }}
              >
                activate Welcome modal
              </a>
            </li>
            <li aria-hidden="true">
              <a
                onClick={() => {
                  setModalState(true, "goodBye");
                  return false;
                }}
              >
                activate Good Bye modal
              </a>
            </li>
          </ol>
        </nav>
      </React.Fragment>
    );
  }
}

Navigation.propTypes = {
  stories: PropTypes.array.isRequired,
  onNavigate: PropTypes.func.isRequired,
  readStory: PropTypes.string.isRequired,
  setModalState: PropTypes.func.isRequired,
  navActive: PropTypes.bool.isRequired,
  viewPort: PropTypes.object.isRequired
};

export default Navigation;

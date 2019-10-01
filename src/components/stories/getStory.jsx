import React, { Component } from "react";
import { Home, StoryOne, StoryTwo, StoryThree } from ".";
import PropTypes from "prop-types";

import { concatClassName } from "../utils";

class GetStory extends Component {
  components = {
    0: Home,
    1: StoryOne,
    2: StoryTwo,
    3: StoryThree
  };

  render() {
    const {
      activeView,
      stories,
      readStory,
      navActive,
      closeNav,
      setNavState
    } = this.props;

    const divStyle = {
      width: activeView.width
    };

    const sortedArr = stories.reduce((acc, element) => {
      if (element.url === readStory) {
        return [element, ...acc];
      }
      return [...acc, element];
    }, []);

    const getCssClass = (sortedArr, index) => {
      return concatClassName(
        "story-card-inner story-card-" +
          sortedArr.findIndex(x => x.id === index),
        navActive ? "hide" : ""
      );
    };

    const GetTagName = id => {
      var TagName = this.components[id];
      return <TagName />;
    };

    const transitionEnd = () => {
      if (closeNav) {
        setNavState();
      }
      // console.log("transitionEnd", readStory, navActive);
    };

    return (
      <div className="story-card" style={divStyle}>
        {stories.map((story, index) => (
          <div
            id={"story-" + story.id}
            key={story.id}
            className={getCssClass(sortedArr, index)}
            onTransitionEnd={transitionEnd}
          >
            {GetTagName(story.id)}
          </div>
        ))}
      </div>
    );
  }
}

GetStory.propTypes = {
  navActive: PropTypes.bool.isRequired,
  activeView: PropTypes.object.isRequired,
  stories: PropTypes.array.isRequired,
  readStory: PropTypes.string.isRequired,
  closeNav: PropTypes.bool.isRequired,
  setNavState: PropTypes.func.isRequired
};

export default GetStory;

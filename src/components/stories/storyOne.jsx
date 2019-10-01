import React, { Component } from "react";
import PropTypes from "prop-types";

class StoryOne extends Component {
  render() {
    const { id, setCardState } = this.props;
    return (
      <React.Fragment>
        <button
          className="toggleCard"
          onClick={() => {
            setCardState(id);
            return false;
          }}
        >
          {"flip"}
        </button>
        <div className="story-card-front">
          <h1>Story One</h1>
          <p>Architect & Engineer</p>
          <p>We love that guy</p>
        </div>
        <div className="story-card-back">
          <h2>John Doe</h2>
          <p>Architect & Engineer</p>
          <p>We love that guy</p>
        </div>
      </React.Fragment>
    );
  }
}

StoryOne.propTypes = {
  setCardState: PropTypes.func.isRequired,
  id: PropTypes.number.isRequired
};
export default StoryOne;

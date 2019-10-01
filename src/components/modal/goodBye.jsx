import React from "react";

class Goodbye extends React.Component {
  render() {
    return (
      <div className="modal-body">
        <h1>Goodbye</h1>
        <p>
          Here is a modal <a href="#">with</a> <a href="#">some</a>{" "}
          <a href="#">focusable</a> parts.
        </p>
      </div>
    );
  }
}

export default Goodbye;

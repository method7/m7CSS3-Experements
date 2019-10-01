import React, { Component } from "react";

class Footer extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <footer role="contentinfo">
        <div>
          <p>
            Aliquam non vulputate urna. Mauris sollicitudin ut risus ac
            hendrerit. Mauris suscipit nibh quam, vel feugiat orci volutpat non.
            Proin nec sem mi. Nunc sed euismod purus, sit amet aliquet nibh.
          </p>
        </div>
      </footer>
    );
  }
}

export default Footer;

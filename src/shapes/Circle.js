import React, { Component } from "react";

export class Circle extends Component {
  constructor(props) {
    super(props);

    this.state = {
      divStyle: {
        visibility: "hidden"
      },

      coordinates: {
        x: 0,
        y: 0
      }
    };
  }

  render() {
    return <div style={this.state.divStyle} className="circle"></div>;
  }
}

export default Circle;

import React, { Component } from 'react';

export class Square extends Component {
  constructor(props) {
    super(props);

    this.squareRef = React.createRef();

    this.state = {
      offsetWidth: 0,
      offsetHeight: 0
    };
  }

  componentDidMount() {
    this.setState({
      offsetWidth: this.squareRef.current.offsetWidth,
      offsetHeight: this.squareRef.current.offsetHeight
    });
  }

  getNewPosition = () => {
    let { x, y } = this.props.coordinates;
    x = x - this.state.offsetWidth / 2;
    y = y - this.state.offsetHeight / 2;
    return { x: x, y: y };
  };

  render() {
    let { x, y } = this.getNewPosition();

    let divStyle = {
      transform: `translate3D(${x}px, ${y}px, 0px)`
    };

    console.log(this.props);

    return (
      <div
        ref={this.squareRef}
        style={divStyle}
        className={'square fade'}
        /* onAnimationEnd={() => {
          className = 'triangle';
        }} */
      ></div>
    );
  }
}

export default Square;

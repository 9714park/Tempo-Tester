import React, { Component } from 'react';

export class Circle extends Component {
  constructor(props) {
    super(props);

    this.circleRef = React.createRef();

    this.state = {
      offsetWidth: 0,
      offsetHeight: 0
    };
  }

  componentDidMount() {
    this.setState({
      offsetWidth: this.circleRef.current.offsetWidth,
      offsetHeight: this.circleRef.current.offsetHeight
    });
  }

  getCircleNewPosition = () => {
    let { x, y } = this.props.coordinates;
    x = x - this.state.offsetWidth / 2;
    y = y - this.state.offsetHeight / 2;
    return { x: x, y: y };
  };

  render() {
    let { x, y } = this.getCircleNewPosition();

    let divStyle = {
      transform: `translate3D(${x}px, ${y}px, 0px)`
    };

    return <div ref={this.circleRef} style={divStyle} className='circle'></div>;
  }
}

export default Circle;

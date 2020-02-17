import React, { Component } from 'react';

export class Triangle extends Component {
  constructor(props) {
    super(props);

    this.triangleRef = React.createRef();

    this.state = {
      offsetWidth: 0,
      offsetHeight: 0
    };
  }

  componentDidMount() {
    this.setState({
      offsetWidth: this.triangleRef.current.offsetWidth,
      offsetHeight: this.triangleRef.current.offsetHeight
    });
  }

  getTriangleNewPosition = () => {
    let { x, y } = this.props.coordinates;
    x = x - this.state.offsetWidth / 2;
    y = y - this.state.offsetHeight / 2;
    return { x: x, y: y };
  };

  render() {
    let { x, y } = this.getTriangleNewPosition();

    let divStyle = {
      transform: `translate3D(${x}px, ${y}px, 0px)`
    };

    return (
      <div ref={this.triangleRef} style={divStyle} className='triangle'></div>
    );
  }
}

export default Triangle;

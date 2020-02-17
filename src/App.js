import React, { Component } from 'react';
import Circle from './shapes/Circle';
import './App.css';
import Triangle from './shapes/Triangle';

export class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      coordinates: { x: 0, y: 0 }
    };

    this.onClickCreateShape = this.onClickCreateShape.bind(this);
  }

  componentDidMount() {
    window.addEventListener('click', this.onClickCreateShape);
  }
  componentWillUnmount() {
    window.removeEventListener('click', this.onClickCreateShape);
  }

  onClickCreateShape(e) {
    let mousePosition = {};
    mousePosition['x'] = e.x;
    mousePosition['y'] = e.y;

    this.setState({ coordinates: mousePosition });
  }

  render() {
    return (
      <div id='screen'>
        <Circle coordinates={this.state.coordinates} />
        <Triangle coordinates={this.state.coordinates} />
      </div>
    );
  }
}

export default App;

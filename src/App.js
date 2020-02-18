import React, { Component } from 'react';
import Circle from './shapes/Circle';
import Triangle from './shapes/Triangle';
import './App.css';

export class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      coordinates: { x: 0, y: 0 },
      fade: false,
      shapes: []
    };

    this.isTriangle = true;

    // this.onClickCreateShape = this.onClickCreateShape.bind(this);
  }

  componentDidMount() {
    window.addEventListener('click', this.onClickCreateShape);
  }
  componentWillUnmount() {
    window.removeEventListener('click', this.onClickCreateShape);
  }

  onClickCreateShape = event => {
    this.getClickPosition(event)
      .then(res => {
        const { coordinates } = res;

        let Shape;
        if (this.isTriangle) {
          Shape = () => <Triangle coordinates={coordinates}></Triangle>;
          this.isTriangle = false;
        } else {
          Shape = () => <Circle coordinates={coordinates}></Circle>;
          this.isTriangle = true;
        }

        const shapes = [...this.state.shapes, Shape];
        this.setState({ shapes: shapes });
      })
      .catch(err => {
        console.log(err);
      });
  };

  getClickPosition = event => {
    return new Promise((res, rej) => {
      let mousePosition = {};
      mousePosition['x'] = event.x;
      mousePosition['y'] = event.y;

      res({
        coordinates: mousePosition
      });
    });
  };

  render() {
    return (
      <div id='screen'>
        {this.state.shapes.length ? (
          this.state.shapes.map((Shape, i) => <Shape key={i} />)
        ) : (
          <div></div>
        )}
      </div>
    );
  }
}

export default App;

import React, { Component } from 'react';
import Circle from './shapes/Circle';
import Triangle from './shapes/Triangle';
import './App.css';
import Square from './shapes/Square';
import Metronome from './metronome/Metronome';
import Message from './message/Message';

const SHAPES = {
  CIRCLE: 0,
  TRIANGLE: 1,
  SQUARE: 2
};

export class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      coordinates: { x: 0, y: 0 },
      fade: false,
      shapes: []
    };

    this.shapeIndexCounter = 0;
    this.firstClick = true;
  }

  componentDidMount() {
    window.addEventListener('click', this.onClickCreateShape);
  }
  componentWillUnmount() {
    window.removeEventListener('click', this.onClickCreateShape);
  }

  onClickCreateShape = event => {
    if (this.firstClick) {
      this.firstClick = false;
    } else {
      this.getClickPosition(event)
        .then(res => {
          const { coordinates } = res;

          const Shape = this.getShape(coordinates);

          const shapes = [...this.state.shapes, Shape];
          this.setState({ shapes: shapes });
        })
        .catch(err => {
          console.log(err);
        });
    }
  };

  getShape = coordinates => {
    switch (this.shapeIndexCounter) {
      case SHAPES.CIRCLE:
        this.incrementShapeIndexCounter();
        return () => <Circle coordinates={coordinates}></Circle>;

      case SHAPES.TRIANGLE:
        this.incrementShapeIndexCounter();
        return () => <Triangle coordinates={coordinates}></Triangle>;

      case SHAPES.SQUARE:
        this.incrementShapeIndexCounter();
        return () => <Square coordinates={coordinates}></Square>;

      default:
        break;
    }
  };

  incrementShapeIndexCounter = () => {
    this.shapeIndexCounter =
      (this.shapeIndexCounter + 1) % Object.keys(SHAPES).length;
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
        {/* <Message></Message> */}
        {/* <Metronome></Metronome> */}
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

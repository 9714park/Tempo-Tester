import React, { Component } from 'react';
import Circle from './shapes/Circle';
import Triangle from './shapes/Triangle';
import './App.css';

export class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      coordinates: { x: 0, y: 0 },
      animationState: 'paused',
      fade: false
    };

    this.onClickCreateShape = this.onClickCreateShape.bind(this);
  }

  componentDidMount() {
    window.addEventListener('click', this.onClickCreateShape);
  }
  componentWillUnmount() {
    window.removeEventListener('click', this.onClickCreateShape);
  }

  onClickCreateShape = event => {
    this.beginAnimation(event).then();
  };

  beginAnimation = event => {
    return new Promise((res, rej) => {
      let mousePosition = {};
      mousePosition['x'] = event.x;
      mousePosition['y'] = event.y;

      this.setState({
        coordinates: mousePosition,
        animationState: 'running',
        fade: true
      });
      res();

      // TODO: Error handling
    });
  };

  render() {
    const fade = this.state.fade;

    return (
      <div id='screen'>
        {/* <Circle coordinates={this.state.coordinates} /> */}

        <Triangle
          coordinates={this.state.coordinates}
          resetAnimation={() => {
            this.setState({ fade: false });
          }}
          className={fade ? 'fade' : ''}
        />
      </div>
    );
  }
}

export default App;

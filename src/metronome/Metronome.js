import { Component } from 'react';
import click1 from '../click1.wav';
import click2 from '../click2.wav';

export default class Metronome extends Component {
  constructor() {
    super();

    this.state = {
      playing: false,
      count: 0,
      bpm: 100,
      beatsPerMeasure: 4
    };

    this.click1 = new Audio(click1);
    this.click2 = new Audio(click2);
  }

  componentDidMount() {
    this.startStop();
  }

  componentWillUnmount() {
    clearInterval(this.timer);
  }

  startStop = () => {
    this.timer = setInterval(this.playClick, (60 / this.state.bpm) * 1000);
    this.setState(
      {
        count: 0,
        playing: true
      },
      // This calls the first click you hear
      this.playClick
    );
  };

  playClick = () => {
    const { count, beatsPerMeasure } = this.state;
    if (count % beatsPerMeasure === 0) {
      this.click2.play();
    } else {
      this.click1.play();
    }
  };

  render() {
    return null;
  }
}

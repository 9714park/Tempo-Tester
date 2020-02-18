import { Component } from 'react';
import click1 from '../../public/res/click1.wav';
import click2 from '../../public/res/click2.wav';

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

  //   handleBpmChange = e => {
  //     const bpm = e.target.value;

  //     if (this.state.playing) {
  //       // Stop the current metronome
  //       clearInterval(this.timer);

  //       // Start a new metronome with updated BPM
  //       this.timer = setInterval(this.playClick, (60 / bpm) * 1000);

  //       this.setState({
  //         count: 0,
  //         bpm
  //       });
  //     } else {
  //       // Otherwise update the BPM
  //       this.setState({ bpm });
  //     }
  //   };

  //   handleSubmit = e => {
  //     e.preventDefault();
  //     console.log(this.state.bpm);
  //   };

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
    this.setState(state => ({
      count: (state.count + 1) % state.beatsPerMeasure
    }));
  };

  render() {
    this.startStop();
    return null;
  }
}

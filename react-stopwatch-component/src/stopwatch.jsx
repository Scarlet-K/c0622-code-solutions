import React from 'react';

class StopWatch extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      ticking: false,
      count: 0
    };
    this.handleClick = this.handleClick.bind(this);
    this.startTick = this.startTick.bind(this);
    this.stopTick = this.stopTick.bind(this);
    this.reset = this.reset.bind(this);
  }

  handleClick() {
    if (this.state.ticking) {
      this.stopTick();
    } else {
      this.startTick();
    }
  }

  startTick() {
    this.intervalID = setInterval(() => {
      let { count } = this.state;
      count++;
      this.setState({ ticking: true, count });
    }, 1000);
  }

  stopTick() {
    clearInterval(this.intervalID);
    this.setState({ ticking: false, count: this.state.count });
  }

  reset() {
    if (!this.state.ticking) {
      this.setState({ ticking: this.state.ticking, count: 0 });
    }
  }

  render() {
    const tick = this.state.ticking;
    const count = this.state.count;
    const pause = 'fa-sharp fa-solid fa-pause';
    const play = 'fa-sharp fa-solid fa-play';
    return (
      <div className='row text-center'>
        <div className='col-full'>
          <button className='watch' onClick={this.reset}>{count}</button>
        </div>
        <div className='col-full'>
          <i className={tick ? pause : play} onClick={this.handleClick}></i>
        </div>
      </div>
    );
  }
}

export default StopWatch;

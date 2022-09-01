import React from 'react';
import ReactDOM from 'react-dom/client';

class StopWatch extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      startTick: false
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState({
      startTick: !this.state.startTick
    });
  }

  // const intervalID = setInterval(setCountdownInterval, 1000);
  // clearInterval(intervalID);

  // let count = 0;

  // tick() {
  //   count++;
  // }

  render() {
    const tick = this.state.startTick;
    if (tick) {
      return (
        <div className='row text-center'>
          <div className='col-full'>
            <button className='watch'>0</button>
          </div>
          <div className='col-full'>
              <i className='fa-sharp fa-solid fa-pause' onClick={this.handleClick}></i>
          </div>
        </div>
      );
    }
    return (
      <div className='row text-center'>
        <div className='col-full'>
          <button className='watch'>0</button>
        </div>
        <div className='col-full'>
          <i className='fa-sharp fa-solid fa-play' onClick={this.handleClick}></i>
        </div>
      </div>
    );
  }
}

const container = document.getElementById('root');
const root = ReactDOM.createRoot(container);
root.render(<StopWatch />);

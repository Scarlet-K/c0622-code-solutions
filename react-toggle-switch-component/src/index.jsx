import React from 'react';
import ReactDOM from 'react-dom/client';

class ToggleSwitch extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isClicked: false };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    if (this.state.isClicked === false) {
      this.setState({
        isClicked: true
      });
    } else {
      this.setState({
        isClicked: false
      });
    }
  }

  render() {
    const clicked = this.state.isClicked;
    if (clicked) {
      return (
        <div className='row align-center'>
          <div className='col-half'>
            <div className='container-on'>
              <button className='switch transform transition' onClick={this.handleClick}></button>
            </div>
          </div>
          <div className='col-half'>
            <p className='font'>ON</p>
          </div>
        </div>
      );
    } else {
      return (
      <div className='row align-center'>
          <div className='col-half'>
            <div className='container-off'>
            <button className='switch transition' onClick={this.handleClick}></button>
            </div>
          </div>
          <div className='col-half'>
            <p className='font'>OFF</p>
          </div>
        </div>
      );
    }
  }
}

const container = document.querySelector('#root');
const root = ReactDOM.createRoot(container);
root.render(<ToggleSwitch />);

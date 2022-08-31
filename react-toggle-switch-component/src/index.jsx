import React from 'react';
import ReactDOM from 'react-dom/client';

class ToggleSwitch extends React.Component {
  render() {
    return (
    <div className='row'>
      <div className='container-off'>
        <button className='switch'></button>
      </div>
      <span className='col-half text-center align-center'>ON</span>
    </div>
    );
  }
}

const container = document.querySelector('#root');
const root = ReactDOM.createRoot(container);
root.render(<ToggleSwitch />);

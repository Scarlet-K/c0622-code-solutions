import React from 'react';
import ReactDOM from 'react-dom/client';

class CustomButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isClicked: false };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState({ isClicked: true });
  }

  render() {
    const isClicked = this.state.isClicked;
    return (
      isClicked
        ? <button onClick={this.handleClick}>Thanks!</button>
        : <button onClick={this.handleClick}>Click Me!</button>
    );
  }

  //   if (isClicked) {
  //     const thanksButton = <button onClick={this.handleClick}>Thanks!</button>;
  //     return thanksButton;
  //   } else {
  //     const clickButton = <button onClick={this.handleClick}>Click Me!</button>;
  //     return clickButton;
  //   }
  // }
}

const container = document.getElementById('root');
const root = ReactDOM.createRoot(container);
root.render(<CustomButton />);

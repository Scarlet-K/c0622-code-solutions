import React from 'react';

export default class HotButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = { numberOfClicks: 0 };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState({ numberOfClicks: this.state.numberOfClicks + 1 });
  }

  render() {
    const clicks = this.state.numberOfClicks;
    let className = 'button';
    if (clicks < 3) {
      return <button className={className} onClick={this.handleClick}>Hot Button</button>;
    } else if (clicks >= 3 && clicks < 6) {
      className += ' three';
      return <button className={className} onClick={this.handleClick}>Hot Button</button>;
    } else if (clicks >= 6 && clicks < 9) {
      className += ' six';
      return <button className={className} onClick={this.handleClick}>Hot Button</button>;
    } else if (clicks >= 9 && clicks < 12) {
      className += ' nine';
      return <button className={className} onClick={this.handleClick}>Hot Button</button>;
    } else if (clicks >= 12 && clicks < 15) {
      className += ' twelve';
      return <button className={className} onClick={this.handleClick}>Hot Button</button>;
    } else if (clicks >= 15 && clicks < 18) {
      className += ' fifteen';
      return <button className={className} onClick={this.handleClick}>Hot Button</button>;
    } else {
      className += ' eighteen';
      return <button className={className} onClick={this.handleClick}>Hot Button</button>;
    }
  }
}

import React from 'react'; // importing not from our modules but the npm packages
import ReactDOM from 'react-dom/client';

class CustomButton extends React.Component { // curly bracket that starts the class body
  constructor(props) {
    super(props);
    this.state = { isClicked: false };
    this.handleClick = this.handleClick.bind(this);
    // usually becomes a prototype method BUT bind grabs the prototype method and makes a permanant method on the object
  }

  handleClick() {
    this.setState({ isClicked: true }); // object literal
  }

  render() {
    // inside class methods 'use strict' is default
    const isClicked = this.state.isClicked;
    return (
      isClicked
        ? <button>Thanks!</button>
        : <button onClick={this.handleClick}>Click Me!</button> // {JS expression} that is the value of props
    );
  }

  //   if (isClicked) {
  //     const thanksButton = <button>Thanks!</button>;
  //     return thanksButton;
  //   }
//     const clickButton = <button onClick={this.handleClick}>Click Me!</button>;
//     return clickButton;
  // }
}

const container = document.getElementById('root');
const root = ReactDOM.createRoot(container);
root.render(<CustomButton />);

// 1. react deletes everything from the container DOM element and OWNS it thereafter
// 2. react looks at your react element and decides what to do
// - if the react element is an html type (button, div, h1) => DOM Creation
// - if the react element is a function component type => call it and use the elements
// - if the react element is a class component type => NEW (and call render)
//   (third option for class component type)
//   react immediately calls the render method of the new object
// {
//   type: "button",
//   props: {
//     onClick: function,
//     children: "Click Me!"
//   }
// }
// react does DOM creation to make the real DOM match the above object
// and also adds the event listener
// when our click listener runs, it calls setState
// - this starts a transition from the current state to the next state
// - by replacing the old properties in this.state
// - a re-render is scheduled (with the new state)
// react receives a NEW react element from the render method
// {
//   type: "button",
//   props: {
//     children: "Thanks!"
//   }
// }
// react will compare the old version with the new version and ONLY change what is new!
// unless the type of component is different and React needs to delete
// react is rendering completely new react elements, BUT it is only exercising DOM manipulation once
// this is what made React innovative

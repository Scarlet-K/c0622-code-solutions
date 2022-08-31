import React from 'react';
import ReactDOM from 'react-dom/client';

function CustomButton(prop) {
  return (
    <button>{prop.text}</button>
  );
}

// function CustomButton() {
// return <button>Click Me!</button>;
// }

const container = document.getElementById('root');
const root = ReactDOM.createRoot(container);
const element = <CustomButton text="Click Me!"/>;
// const element = <CustomButton/>;
root.render(element);
// root.render(<CustomButton />);

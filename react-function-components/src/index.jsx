import React from 'react';
import ReactDOM from 'react-dom';

function CustomButton(prop) {
  return <button>{prop.text}</button>;
}

const container = document.getElementById('root');
const root = ReactDOM.createRoot(container);
const element = <CustomButton text="Click Me!"/>;
root.render(element);

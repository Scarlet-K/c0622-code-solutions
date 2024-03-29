import React from 'react';
import * as ReactDOM from 'react-dom/client';

const reactElement = React.createElement(
  'h1',
  [null],
  ['Hello, React!']
);

console.log('type of React Element:', typeof reactElement);
console.log(reactElement);

const container = document.getElementById('root');
console.log(container);

const root = ReactDOM.createRoot(container);
root.render(reactElement);

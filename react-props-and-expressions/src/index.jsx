import React from 'react';
import ReactDOM from 'react-dom/client';

function CustomButton(props) {
  return (
    <button>{props.text}</button>
  );
}

// function CustomButton(props) {
//   const styles = { backgroundColor: props.color, borderRadius: props.roundedness}
//   return (
//     <button style={styles}>{props.text}</button>
//   );
// }

const element = (
  <div>
    <CustomButton text="I" />
    <CustomButton text="know" />
    <CustomButton text="React!" />
  </div>
);

// function ThreeButtons() {
//   return (
//     <div>
//     <CustomButton text="I" />
//     <CustomButton text="know" />
//     <CustomButton text="React!" />
//   </div>
//   );
// }

const container = document.querySelector('#root');
const root = ReactDOM.createRoot(container);

root.render(element);
// root.render(<ThreeButtons />);

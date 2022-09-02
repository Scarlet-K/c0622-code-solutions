import React from 'react';
import ReactDOM from 'react-dom/client';

// const topics = [
//   {
//     language: 'Hypertext Markup Language',
//     details: 'HTML'
//   },
//   {
//     language: 'Cascading Style Sheets',
//     details: 'CSS'
//   },
//   {
//     language: 'JavaScript',
//     details: 'JS'
//   }
// ];

class Accordion extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isClicked: false
    };
    // this.createAccordion = this.createAccordion.bind(this);
  }

  // createAccordion(props) {
  //   const topics = props.topicsArray.map(topic =>
  //     <li key={topic.index} className='topic'>{topic.language}</li>
  //   );
  //   return (
  //     <ul>{topics}</ul>
  //   );
  // }

  render() {
    return (
    <ul>
      <li className='topic'>Hypertext Markup Language</li>
      <li className='topic'>Cascading Style Sheets</li>
      <li className='topic'>JavaScript</li>
    </ul>
    );
  }
}

const container = document.getElementById('root');
const root = ReactDOM.createRoot(container);
root.render(<Accordion />);

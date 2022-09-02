import React from 'react';
import ReactDOM from 'react-dom/client';

const topics = [
  {
    language: 'Hypertext Markup Language',
    details: 'HTML'
  },
  {
    language: 'Cascading Style Sheets',
    details: 'CSS'
  },
  {
    language: 'JavaScript',
    details: 'JS'
  }
];

class Accordion extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isClicked: false
    };
  }

  render() {
    const accordion = topics.map((topic, index) =>
      <li key={index} className='topic'>{topic.language}</li>
    );
    return (
    <ul>{accordion}</ul>
    );
  }
}

const container = document.getElementById('root');
const root = ReactDOM.createRoot(container);
root.render(<Accordion />);

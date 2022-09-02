import React from 'react';
import ReactDOM from 'react-dom/client';

const topics = [
  {
    language: 'Hypertext Markup Language',
    detail: 'HTML detail'
  },
  {
    language: 'Cascading Style Sheets',
    detail: 'CSS detail'
  },
  {
    language: 'JavaScript',
    detail: 'JS detail'
  }
];

class Accordion extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isClicked: false
    };
    this.showDetail = this.showDetail.bind(this);
  }

  showDetail(event) {
    this.setState({
      isClicked: true
    });
  }

  render() {
    const accordion = topics.map((topic, index) => {
      if (!this.showDetail) { // what can I check to make sure the correct detail is shown?
        return (
        <li key={index} onClick={this.showDetail}>
          <p className='topic'>{topic.language}</p>
          <p className='detail'>{topic.detail}</p>
        </li>
        );
      }
      return (
        <li key={index} onClick={this.showDetail}>
          <p className='topic'>{topic.language}</p>
          <p className='detail'>{topic.detail}</p>
        </li>
      );
    });
    return (
    <ul>{accordion}</ul>
    );
  }
}

const container = document.getElementById('root');
const root = ReactDOM.createRoot(container);
root.render(<Accordion />);

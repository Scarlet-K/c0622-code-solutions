import React from 'react';

const topics = [
  {
    language: 'Hypertext Markup Language',
    detail: 'Hypertext Markup Language (HTML) is the standard markup language for creating web pages and web applications. With Cascading Style Sheets (CSS) and JavaScript, it forms a triad of cornerstone technologies for the World Wide Web.'
  },
  {
    language: 'Cascading Style Sheets',
    detail: 'Cascading Style Sheets (CSS) is a style sheet language used for describing the presentation of a document written in a markup language like HTML. CSS is a cornerstone technology of the World Wide Web alongside HTML and JavaScript.'
  },
  {
    language: 'JavaScript',
    detail: 'JavaScript, often abbreviated as JS, is a high-level, interpreted programming language that conforms to the ECMAScript specifications. JavaScript has curly-bracket syntax, dynamic typing, prototype-based object-orientation, and first-class functions.'
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
      isClicked: !this.state.isClicked,
      target: event.target.textContent
    });
  }

  render() {
    const accordion = topics.map((topic, index) => {
      if (this.state.isClicked && (topics[index].language === this.state.target)) {
        return (
          <li key={index}>
            <p className='topic' onClick={this.showDetail}>{topic.language}</p>
            <p className='detail'>{topic.detail}</p>
          </li>
        );
      } else {
        return (
          <li key={index}>
            <p className='topic' onClick={this.showDetail}>{topic.language}</p>
          </li>
        );
      }
    });
    return (
      <ul>{accordion}</ul>
    );
  }
}

export default Accordion;

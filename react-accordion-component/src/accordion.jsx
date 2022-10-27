import React from 'react';

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
    const accordion = this.props.map((topic, index) => {
      if (this.state.isClicked && (this.props[index].language === this.state.target)) {
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

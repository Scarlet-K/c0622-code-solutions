import React from 'react';
import ReactDOM from 'react-dom/client';

class PasswordInput extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      password: ''
    };
    this.handlePasswordChange = this.handlePasswordChange.bind(this);
    this.handleshowCheck = this.showCheck.bind(this);
  }

  handlePasswordChange(event) {
    this.setState({
      password: event.target.value
    });
  }

  getMessage() {
    const { password } = this.state;
    if (!password) {
      return 'A password is required.';
    } else if (password.length < 8) {
      return 'Your password is too short.';
    } else if (password.length >= 8) {
      return '';
    }
  }

  showCheck() {
    const { password } = this.state;
    if (!password) {
      return 'fa-xmark';
    } else if (password.length < 8) {
      return 'fa-xmark';
    } else if (password.length >= 8) {
      return 'fa-check';
    }
  }

  render() {
    const icon = this.showCheck();
    const message = this.getMessage();
    return (
      <div>
        <label htmlFor='user-password'>Password</label>
        <div>
          <input
            required
            name='user-password'
            type='password'
            id='user-password'
            value={this.state.password}
            onChange={this.handlePasswordChange}>
          </input>
          <i className={`fa-sharp fa-solid ${icon}`}></i>
          <div className='red'>{message}</div>
        </div>
      </div>
    );
  }
}

const container = document.querySelector('#root');
const root = ReactDOM.createRoot(container);
root.render(<PasswordInput />);

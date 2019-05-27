import React, { Component } from 'react';
import './Login.css';
import { LoginImage } from './LoginImage';

class Login extends Component {
  render() {
    return (
      <div className="LoginContainerBox">
        <div className="LoginBox">
          <h2 className="LoginTitle"> Login </h2>
          <input className="LoginInputField" name="username" onChange={this.handleTextBoxChange} placeholder="User Name" />
          <input className="LoginInputField" name="password" onChange={this.handleTextBoxChange} placeholder="Password" />
          <div className="SubmitBox">
            <button type="button" className="LoginButton" onClick={this.handleLoginClick}>Submit</button>
            <p className="EmailText"> Forgot Email? </p>
          </div>
        </div>
        <LoginImage />
      </div>
    );
  }
}
export default Login;

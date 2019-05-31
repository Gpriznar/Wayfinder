import React, { Component, Fragment } from 'react';
import Breakpoint from 'react-socks';
import { Mutation } from 'react-apollo';
import { connect } from 'react-redux';

import './Login.css';
import { MobileImage } from './Images';
import { LOGIN } from '../Utils/mutations';

class MobileLogin extends Component {
  constructor(props) {
    super(props)

    if (this.props.isAuth) {
      this.props.history.push('/dashboard');
    }

    this.state = {
      username: '',
      password: '',
    };
  }

  handleTextBoxChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  }

  render() {

    return (
      <div className="login-screen">
        <Breakpoint small down>
          <div className="image-half">
            <MobileImage />
          </div>
          <div className="login-orgainizer">
            <div className="input-half">
              <Mutation mutation={LOGIN} variables={this.state}>
                {(login, { data, loading, error }) => {
                  if (loading) return <p>loading...</p>;
                  if (error) return <p>error...</p>;
                  if (data) {
                    if (data.login.success) {
                      localStorage.setItem('jsonwebtoken', data.login.token);
                      this.props.onSignIn(data.login.token);
                      this.props.history.push('/dashboard');
                      return (
                        <Fragment>
                          <h2 className="LoginTitle"> Login </h2>
                          <input type="text" className="LoginInputField" name="username" onChange={this.handleTextBoxChange} placeholder="username" />
                          <input type="password" className="LoginInputField" name="password" onChange={this.handleTextBoxChange} placeholder="password" />
                          <div className="submit">
                            <div>{data.login.message}</div>
                          </div>
                        </Fragment>
                      );
                    }
                    return (
                      <Fragment>
                        <h3>{data.login.message}</h3>
                        <h2 className="LoginTitle"> Login </h2>
                        <input type="text" className="LoginInputField" name="username" onChange={this.handleTextBoxChange} placeholder="username" />
                        <input type="password" className="LoginInputField" name="password" onChange={this.handleTextBoxChange} placeholder="password" />
                        <div className="submit">
                          <button type="button" onClick={login} className="LoginButton">Login</button>
                        </div>
                      </Fragment>
                    );
                  }
                  return (
                    <Fragment>
                      <h2 className="LoginTitle"> Login </h2>
                      <input type="text" className="LoginInputField" name="username" onChange={this.handleTextBoxChange} placeholder="username" />
                      <input type="password" className="LoginInputField" name="password" onChange={this.handleTextBoxChange} placeholder="password" />
                      <div className="submit">
                        <button type="button" onClick={login} className="LoginButton">Login</button>
                      </div>
                    </Fragment>
                  );
                }}
              </Mutation>
            </div>
          </div>
        </Breakpoint>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  isAuth: state.isAuth,
});

const mapDispatchToProps = dispatch => ({
  onSignIn: token => dispatch({ type: 'SIGN_IN', token }),
});

export default connect(mapStateToProps, mapDispatchToProps)(MobileLogin);

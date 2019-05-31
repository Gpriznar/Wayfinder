import React, { Component } from 'react';

import './Login.css';

import MobileLogin from './MobileLogin';
import TabletLogin from './TabletLogin';
import DesktopLogin from './DesktopLogin';

class Login extends Component {
  render() {
    return (
      <div className="all-sizes">
        <MobileLogin history={this.props.history} />
        <TabletLogin history={this.props.history} />
        <DesktopLogin history={this.props.history} />
      </div>
    );
  }
}
export default Login;

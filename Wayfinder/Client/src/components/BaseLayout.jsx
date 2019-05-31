import React, { Component } from 'react';
import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux';

import Menu from './Menu';
import App from '../App';
import './Menu.css';


class BaseLayout extends Component {


    render() {

        return(
            <div>
              {this.props.isAuth ? <Menu history={this.props.history} /> : null }
              {this.props.children}
            </div>
        )
    }
}

const mapStateToProps = state => ({
  isAuth: state.isAuth,
});

export default connect(mapStateToProps)(withRouter(BaseLayout));

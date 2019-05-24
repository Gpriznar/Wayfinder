import React, { Component } from 'react';
import Menu from './Menu';
// import {connect} from 'react-redux';
// import {withRouter} from 'react-router-dom';
import './Menu.css';
import Dashboard from '../components/Dashboard';

// <Dashboard />
class BaseLayout extends Component {


    render() {
        return(
            <div>
                <Menu />
                {this.props.children}
            </div>
        )
    }
}

export default BaseLayout;

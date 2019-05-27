import React, { Component } from 'react';
import Menu from './Menu';
// import {connect} from 'react-redux';
// import {withRouter} from 'react-router-dom';
import './Menu.css';


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

import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import './Menu.css';
// import {connect} from 'react-redux';
// import {withRouter} from 'react-router-dom';


class Menu extends Component {
    render() {
        return(
            <div id="myHeader" className='menu'>
            <ul className='menu-items'>
                <li  className='wayfinder'><NavLink to='/'>Wayfinder</NavLink></li>
                <li className='logout'><NavLink to='/logout'>Logout</NavLink></li>
            </ul>
            </div>
        )
    }
}

export default Menu;

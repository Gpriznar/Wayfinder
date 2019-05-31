import React, { Component } from 'react';
import { NavLink} from 'react-router-dom';
import { connect } from 'react-redux';
import { ApolloConsumer } from 'react-apollo';


import './Menu.css';


class Menu extends Component {
  handleSignOutClick = (client) => {
    localStorage.removeItem('jsonwebtoken');
    this.props.onSignOut();
    client.resetStore();
    this.props.history.push('/');
  }

  render() {
    return (
      <ApolloConsumer>
        {(apolloClient) => {
          return (
            <div id="myHeader" className="menu">
              <ul className="menu-items">
                <li className="wayfinder"><NavLink to="/dashboard">Wayfinder</NavLink></li>
                <li className="logout"><button onClick={() => this.handleSignOutClick(apolloClient)} className="logoutBtn">Logout</button></li>
              </ul>
            </div>
          )
        }
      }
      </ApolloConsumer>
    )
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onSignOut: () => dispatch({ type: 'SIGN_OUT' }),
  };
};

export default connect(null, mapDispatchToProps)(Menu);

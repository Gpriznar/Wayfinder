import React, { Component, Fragment } from 'react';
import { Query } from 'react-apollo';
import gql from 'graphql-tag';

const GET_USERS = gql`
  query {
    users {
      username
    }
  }
`;

class Test extends Component {
  render() {
    return (
      <Query query={GET_USERS}>
        {({ data, loading, error }) => {
        if (loading) return <h3>loading...</h3>;
        if (error) return <h3>error...</h3>;
        console.log(data)
        const { users } = data;
        const userDiv = users.map(user =>{
          return <div>{user.username}</div>
        })
        return(
          <Fragment>
            {userDiv}
          </Fragment>
        )
      }}
        </Query>
    )
  }
}

export default Test;

import React, { Component } from 'react';
import { Mutation } from 'react-apollo';
import gql from 'graphql-tag';

const FIRE_REFRESH = gql`
mutation runLighthouse($name: String!){
  runLighthouse(name: $name) {
    name
  }
}
`;

class RefreshData extends Component {

  render() {
    return (
      <Mutation mutation={FIRE_REFRESH} variables={{ name: 'Howdy' }}>
        {(runLighthouse, { data, loading, error }) => {
          if (loading) return <p>loading...</p>;
          if (error) return <p>error...</p>;
          if (data) {
            return (
              <div>
                <p>Data Refreshing ...</p>
                <button type="button" className="ForceRefreshButton" onClick={runLighthouse}>Refresh Data</button>
              </div>
            )
          }
          return <button type="button" className="ForceRefreshButton" onClick={runLighthouse}>Refresh Data</button>
        }}
      </Mutation>
    );
  }
}

export default RefreshData;

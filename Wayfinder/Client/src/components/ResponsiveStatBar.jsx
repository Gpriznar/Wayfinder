import React, { Component } from 'react';
import Breakpoint, { setDefaultBreakpoints } from 'react-socks';
import { Query } from 'react-apollo';
import Data from './Data'
import gql from 'graphql-tag';
import colorCode from '../Utils/ColorCode';
import { connect } from 'react-redux';
import './ResponsiveStatBar.css';

setDefaultBreakpoints([
  { xsmall: 0 }, // all mobile devices
  { small: 576 }, // mobile devices (not sure which one's this big)
  { medium: 768 }, // ipad, ipad pro, ipad mini, etc
  { large: 1100 }, // smaller laptops
  { xlarge: 1200 }, // laptops and desktops
]);

const GET_AZ_STATS = gql`
  query {
      sortWebsite {
          website_id
          website {
              url
          }
          performance
          accessibility
          best_practices
          seo
          time_fetch
          method
      }
  }
  `;

const GET_ZA_STATS = gql`
    query {
        sortWebsite {
            website_id
            website {
                url
            }
            performance
            accessibility
            best_practices
            seo
            time_fetch
            method
        }
    }
    `;

const GET_STATS = gql`
    query {
        stats {
            website_id
            website {
                url
            }
            performance
            accessibility
            best_practices
            seo
            time_fetch
            method
            error_code
            error_message
        }
    }
`;

class ResponsiveStatBar extends Component {
  render() {
    console.log(this.props.az)
    if (this.props.az) {
      return (
      <Query query={GET_AZ_STATS}>
        {({ data, loading, error }) => {
          if (loading) return <p>loading...</p>;
          if (error) return <p>error...</p>;
          const { stats } = data;
          console.log(stats)
          return(
            <Data stats = {stats}/>
          )
}
}
      </Query>
)
    } else if (this.props.za) {
      return (
      <Query query={GET_ZA_STATS}>
        {({ data, loading, error }) => {
          if (loading) return <p>loading...</p>;
          if (error) return <p>error...</p>;
          const { stats } = data;
          return(
            <Data stats = {stats}/>
          )
}
}
      </Query>
)
    } else

    return (
      <Query query={GET_STATS}>
        {({ data, loading, error }) => {
          if (loading) return <p>loading...</p>;
          if (error) return <p>error...</p>;
          const { stats } = data;
          return(
            <Data stats = {stats}/>
          )
}
}
      </Query>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    az: state.az,
    za: state.za,
  };
}

export default connect(mapStateToProps)(ResponsiveStatBar);

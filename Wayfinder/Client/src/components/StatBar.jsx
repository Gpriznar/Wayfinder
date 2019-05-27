import React, { Component, Fragment } from 'react';
import { Query } from 'react-apollo';
import gql from 'graphql-tag';
import './StatBar.css';

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
        }
    }
`;

class StatBar extends Component {
  render() {
    return (

      <Query query={GET_STATS}>
        {({ data, loading, error }) => {
          if (loading) return <p>loading...</p>;
          if (error) return <p>error...</p>;
          const { stats } = data;
          const mobileStats = stats.filter(stat => {return stat.method === 'mobile'})
          const desktopStats = stats.filter(stat => {return stat.method === 'desktop'})
          const methodStats = [];
          for (let i = 0; i < desktopStats.length; i++) {
            const tempArray = [];
            for (let j = 0; j < mobileStats.length; j++) {
              if (desktopStats[i].website_id === mobileStats[j].website_id) {
                tempArray.push({ desktop: desktopStats[i], mobile: mobileStats[j] });
              }
            }
            methodStats.push(tempArray);
          }
          const reports = methodStats.map((stat) => {
            const { desktop, mobile } = stat[0];
            return (
              <div className="all-stat-bars">
                <div className="stat-bar">
                  <div className="site-info">
                    <p className="site-url">{desktop.website.url}</p>
                    <p className="last-report">{desktop.time_fetch}</p>
                  </div>
                  <div className="stat-display">
                    <div className="column-style">
                      <div className="desktop-info">
                        <p className="stat-style">
                          {desktop.performance * 100}
                              %
                        </p>
                        <p className="stat-style">Desktop</p>
                      </div>
                      <div className="mobile-info">
                        <p className="stat-style">
                          {mobile.performance * 100}
                            %
                        </p>
                        <p className="stat-style">Mobile</p>
                      </div>
                    </div>
                    <div className="column-style">
                      <div className="desktop-info">
                        <p className="stat-style">
                          {desktop.seo * 100}
                                %
                        </p>
                        <p className="stat-style">Desktop</p>
                      </div>
                      <div className="mobile-info">
                        <p className="stat-style">
                          {mobile.seo * 100}
                            %
                        </p>
                        <p className="stat-style">Mobile</p>
                      </div>
                    </div>
                    <div className="column-style">
                      <div className="desktop-info">
                        <p className="stat-style">
                          {desktop.accessibility * 100}
                            %
                        </p>
                        <p className="stat-style">Desktop</p>
                      </div>
                      <div className="mobile-info">
                        <p className="stat-style">
                          {mobile.accessibility * 100}
                            %
                        </p>
                        <p className="stat-style">Mobile</p>
                      </div>
                    </div>
                    <div className="last-column-style">
                      <div className="desktop-info">
                        <p className="stat-style">
                          {desktop.best_practices * 100}
                            %
                        </p>
                        <p className="stat-style">Desktop</p>
                      </div>
                      <div className="mobile-info">
                        <p className="stat-style">
                          {mobile.best_practices * 100}
                            %
                        </p>
                        <p className="stat-style">Mobile</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          });
          return (
            <Fragment>
              {reports}
            </Fragment>
          );
        }
                }
      </Query>
    );
  }
}
export default StatBar;

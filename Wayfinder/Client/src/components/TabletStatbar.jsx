import React, { Component } from 'react';
import Breakpoint from 'react-socks';
import { Query } from 'react-apollo';
import gql from 'graphql-tag';
import './MobileStatBar.css';
import './ResponsiveStatBar.css';


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

class TabletStatBar extends Component {
  render() {
    return (

      <Query query={GET_STATS}>
        {({ data, loading, error }) => {
          if (loading) return <p>loading...</p>;
          if (error) return <p>error...</p>;
          const { stats } = data;
          const mobileStats = stats.filter(stat => {return stat.method === 'mobile';});
          const desktopStats = stats.filter(stat => {return stat.method === 'desktop';});
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
                <div className="tablet-flex">
                    <Breakpoint medium only>
                <div className="MobileStatbar">
                  <p className="site-url">{desktop.website.url}</p>
                  <p className="last-report">{desktop.time_fetch}</p>
                  <div className="all-four-stats">
                    <div className="top-stat-row">
                      <div className="top-left-stat-quandant">
                        <p className="stat-name">PERFORMANCE</p>
                        <div className="desktop-mobile">
                          <div className="stats">
                            <p className="stat-style">
                              {desktop.performance * 100}
                          %
                            </p>
                            <p className="stat-style">Desktop</p>
                          </div>
                          <div className="stats">
                            <p className="stat-style">
                              {mobile.performance * 100}
                          %
                            </p>
                            <p className="stat-style">Mobile</p>
                          </div>
                        </div>
                      </div>
                      <div className="stat-quandant">
                        <p className="stat-name">SEO</p>
                        <div className="desktop-mobile">
                          <div className="stats">
                            <p className="stat-style">
                              {desktop.seo * 100}
                          %
                            </p>
                            <p className="stat-style">Desktop</p>
                          </div>
                          <div className="stats">
                            <p className="stat-style">
                              {mobile.seo * 100}
                          %
                            </p>
                            <p className="stat-style">Mobile</p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="stat-row">
                      <div className="bottom-left-stat-quandant">
                        <p className="stat-name">ACCESSIBILITY</p>
                        <div className="desktop-mobile">
                          <div className="stats">
                            <p className="stat-style">
                              {desktop.accessibility * 100}
                          %
                            </p>
                            <p className="stat-style">Desktop</p>
                          </div>
                          <div className="stats">
                            <p className="stat-style">
                              {mobile.accessibility * 100}
                          %
                            </p>
                            <p className="stat-style">Mobile</p>
                          </div>
                        </div>
                      </div>
                      <div className="bottom-right-stat-quandant">
                        <p className="stat-name">BEST PRACTICES</p>
                        <div className="desktop-mobile">
                          <div className="stats">
                            <p className="stat-style">
                              {desktop.best_practices * 100}
                          %
                            </p>
                            <p className="stat-style">Desktop</p>
                          </div>
                          <div className="stats">
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
                </div>
              </Breakpoint>
                </div>
              
            );
          });
          return (
            <div>
              {reports}
            </div>
          );
        }
    }
      </Query>
    );
  }
}
export default TabletStatBar;
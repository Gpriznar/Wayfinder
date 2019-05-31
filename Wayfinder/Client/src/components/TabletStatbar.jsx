import React, { Component } from 'react';
import Breakpoint from 'react-socks';
import { Query } from 'react-apollo';
import gql from 'graphql-tag';
import moment from 'moment';
import colorCode from '../Utils/ColorCode';

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
            error_code
            error_message
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
            if (desktop.error_code) {
              return (
                <div className="tablet-flex">
                <Breakpoint medium only>
                  <div className="MobileStatbar">
                    <p className="site-url">{desktop.website.url}</p>
                    <p className="last-report-mobile">
                      Last Report: {moment(desktop.time_fetch).format('MM/DD/YYYY')}
                      </p>
                    <div className="all-four-stats">
                        <p className="stat-name">ERROR: {desktop.error_code}, {desktop.error_message}</p>
                    </div>
                  </div>
                </Breakpoint>
                </div>
              )
            }
            if (mobile.error_code) {
              return (
                <div className="tablet-flex">
                <Breakpoint medium only>
                  <div className="MobileStatbar">
                    <p className="site-url">{desktop.website.url}</p>
                    <p className="last-report-mobile">
                      Last Report: {moment(desktop.time_fetch).format('MM/DD/YYYY')}
                      </p>
                    <div className="all-four-stats">
                        <p className="stat-name">ERROR: {mobile.error_code}, {mobile.error_message}</p>
                    </div>
                  </div>
                </Breakpoint>
                </div>
              )
            }
            return (
              <div className="tablet-flex">
              <Breakpoint medium only>
                  <div className="MobileStatbar">
                  <p className="site-url">{desktop.website.url}</p>
                  <p className="last-report-mobile">
                    Last Report: {moment(desktop.time_fetch).format('MM/DD/YYYY')}
                    </p>
                  <div className="all-four-stats">
                    <div className="top-stat-row">
                      <div className="top-left-stat-quandant">
                        <p className="stat-name">PERFORMANCE</p>
                        <div className="desktop-mobile">
                          <div className="stats">
                            <p className={colorCode(desktop.performance)}>
                              {Math.ceil(desktop.performance * 100)}
                          %
                            </p>
                            <p className="stat-style">Desktop</p>
                          </div>
                          <div className="stats">
                            <p className={colorCode(mobile.performance)}>
                              {Math.ceil(mobile.performance * 100)}
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
                            <p className={colorCode(desktop.seo)}>
                              {Math.ceil(desktop.seo * 100)}
                          %
                            </p>
                            <p className="stat-style">Desktop</p>
                          </div>
                          <div className="stats">
                            <p className={colorCode(mobile.seo)}>
                              {Math.ceil(mobile.seo * 100)}
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
                            <p className={colorCode(desktop.accessibility)}>
                              {Math.ceil(desktop.accessibility * 100)}
                          %
                            </p>
                            <p className="stat-style">Desktop</p>
                          </div>
                          <div className="stats">
                            <p className={colorCode(mobile.accessibility)}>
                              {Math.ceil(mobile.accessibility * 100)}
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
                            <p className={colorCode(desktop.best_practices)}>
                              {Math.ceil(desktop.best_practices * 100)}
                          %
                            </p>
                            <p className="stat-style">Desktop</p>
                          </div>
                          <div className="stats">
                            <p className={colorCode(mobile.best_practices)}>
                              {Math.ceil(mobile.best_practices * 100)}
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
            <div className="flexing">
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

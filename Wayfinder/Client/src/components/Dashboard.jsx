import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import StatBar from './StatBar';
import ResponsiveStatBar from './ResponsiveStatBar';
import MobileStatBar from './MobileStatBar';
import TabletStatBar from './TabletStatbar';
import './Dashboard.css';



class Dashboard extends Component {
  render() {
    return (
      <div className="dashboard">
        {/* <div className="filter-add-website-row">
            <div className="filter-website-button">
              <div className="filter-button">
                <p>Filter:</p>
                <button type="button" className="a-z">A-Z</button>
              </div>
              <button type="button" className="add-button"><Link to="/addwebsite">Add Website</Link></button>
            </div>
            <div className="column-placement">
              <div className="column-titles">
                <p className="performance">PERFORMANCE</p>
                <p className="seo">SEO</p>
                <p className="accessibilty">ACCESSIBILITY</p>
                <p className="best-practices">BEST PRACTICES</p>
              </div>
            </div>
            <StatBar />
            </div> */}
            <MobileStatBar />
            <TabletStatBar />
            <ResponsiveStatBar />
            {/* <Example /> */}
        </div>
    )
  }
}

export default Dashboard;

import React, { Component } from 'react';
import StatBar from './StatBar';
import './Dashboard.css';

class Dashboard extends Component {
    render() {
        return(
            <div className='dashboard'>
                <div className='filter-add-website-row'>
                    <div className='filter-button'>
                        <div className='filter-website-button'>
                        <p>Filter:</p>
                        <button className='add-button'>+ Add Website</button>
                        </div>
                    <div className='column-placement'>
                    <div className='column-titles'>
                        <p className='title'>PERFORMANCE</p>
                        <p className='title'>SEO</p>
                        <p className='title'>ACCESSIBILITY</p>
                        <p className='title'>BEST PRACTICES</p>
                    </div>
                    </div>
                <StatBar />
                </div>
            </div>
        </div>
        )
    }
}

export default Dashboard;

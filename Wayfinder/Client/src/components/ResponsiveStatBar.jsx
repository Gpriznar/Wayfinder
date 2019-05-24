import React, { Component } from 'react';

class ResponsiveStatBar extends Component {
    render() {
        return(

<div className='stat-bar'>
            <div className='site-info'>
                <p className='site-url'>https://www.Poetic.io</p>
                <p className='last-report'>Last Report: 3/24/19</p>
            </div>
            <div className='stat-display'>
                <div className='column-style'>
                    <p>PERFORMANCE</p>
                    <div className='desktop-info'>
                    <p className='stat-style'>97%</p>
                    <p className='stat-style'>Desktop</p>
                    </div>
                    <div className='desktop-info'>
                    <p className='stat-style'>96%</p>
                    <p className='stat-style'>Mobile</p>
                    </div>
                </div>
                <div className='column-style'>
                    <p>SEO</p>
                    <div className='desktop-info'>
                    <p className='stat-style'>86%</p>
                    <p className='stat-style'>Desktop</p>
                    </div>
                    <div className='desktop-info'>
                    <p className='stat-style'>85%</p>
                    <p className='stat-style'>Mobile</p>
                    </div>
                </div>
                <div className='column-style'>
                    <p>ACCESSIBILITY</p>
                    <div className='desktop-info'>
                    <p className='stat-style'>97%</p>
                    <p className='stat-style'>Desktop</p>
                    </div>
                    <div className='desktop-info'>
                    <p className='stat-style'>36%</p>
                    <p className='stat-style'>Mobile</p>
                    </div>
                </div>
                <div className='last-column-style'>
                    <p>BEST PRACTICES</p>
                    <div className='desktop-info'>
                    <p className='stat-style'>97%</p>
                    <p className='stat-style'>Desktop</p>
                    </div>
                    <div className='desktop-info'>
                    <p className='stat-style'>75%</p>
                    <p className='stat-style'>Mobile</p>
                    </div>
                </div>
            </div>
        </div>
        )
    }
}

export default ResponsiveStatBar;

import React, { Component, Fragment } from 'react';
import { Query } from 'react-apollo';
import gql  from 'graphql-tag';
import './StatBar.css';

// const GET_STATS = gql`
//     query {
//         stats {
//             website {
//                 url
//             }
//             performance
//             accessibility 
//             best_practices
//             seo
//             time_fetch
//         }
//     }
// `;

class StatBar extends Component {
    render() {
        return(

            // <Query query={GET_STATS}>
            //     {({ data, loading, error }) => {
            //         if (loading) return <p>loading...</p>;
            //         if (error) return <p>error...</p>;
            //         console.log(data.stats)
            //         const { stats } = data;
            //         const reports = stats.map((stat) => {
            //             return(
            // <div className='all-stat-bars'>
            // <div className='stat-bar'>
            //     <div className='site-info'>
            //         <p className='site-url'>{stat.website.url}</p>
            //         <p className='last-report'>{stat.time_fetch}</p>
            //     </div>
            //     <div className='stat-display'>
            //         <div className='column-style'>
            //             <div className='desktop-info'>
            //             <p className='stat-style'>{stat.performance}</p>
            //             <p className='stat-style'>Desktop</p>
            //             </div>
            //             <div className='desktop-info'>
            //             <p className='stat-style'>TBD</p>
            //             <p className='stat-style'>Mobile</p>
            //             </div>
            //         </div>
            //         <div className='column-style'>
            //             <div className='desktop-info'>
            //             <p className='stat-style'>{stat.seo}</p>
            //             <p className='stat-style'>Desktop</p>
            //             </div>
            //             <div className='desktop-info'>
            //             <p className='stat-style'>TBD</p>
            //             <p className='stat-style'>Mobile</p>
            //             </div>
            //         </div>
            //         <div className='column-style'>
            //             <div className='desktop-info'>
            //             <p className='stat-style'>{stat.accessibility}</p>
            //             <p className='stat-style'>Desktop</p>
            //             </div>
            //             <div className='desktop-info'>
            //             <p className='stat-style'>TBD</p>
            //             <p className='stat-style'>Mobile</p>
            //             </div>
            //         </div>
            //         <div className='last-column-style'>
            //             <div className='desktop-info'>
            //             <p className='stat-style'>{stat.best_practices}</p>
            //             <p className='stat-style'>Desktop</p>
            //             </div>
            //             <div className='desktop-info'>
            //             <p className='stat-style'>TBD</p>
            //             <p className='stat-style'>Mobile</p>
            //             </div>
            //         </div>
            //         </div>
            //         </div>
            //         </div>
            //             )
            //         })
            //         return(
            //        <Fragment>
            //            {reports}
            //        </Fragment>
            //         )
            //     }
            //     }
            // </Query>



        <div>

            <div className='stat-bar'>
            <div className='site-info'>
                <p className='site-url'>https://www.Poetic.io</p>
                <p className='last-report'>Last Report: 3/24/19</p>
            </div>
            <div className='stat-display'>
                <div className='column-style'>
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

        <div className='stat-bar'>
                <div className='site-info'>
                    <p className='site-url'>https://www.google.com</p>
                    <p className='last-report'>Last Report: 3/24/19</p>
                </div>
                <div className='stat-display'>
                    <div className='column-style'>
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


            <div className='stat-bar'>
            <div className='site-info'>
                <p className='site-url'>https://www.webflow.com</p>
                <p className='last-report'>Last Report: 3/24/19</p>
            </div>
            <div className='stat-display'>
                <div className='column-style'>
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


        <div className='stat-bar'>
                <div className='site-info'>
                    <p className='site-url'>https://www.hellomonday.com</p>
                    <p className='last-report'>Last Report: 3/24/19</p>
                </div>
                <div className='stat-display'>
                    <div className='column-style'>
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


            <div className='stat-bar'>
            <div className='site-info'>
                <p className='site-url'>https://www.hugeinc.com</p>
                <p className='last-report'>Last Report: 3/24/19</p>
            </div>
            <div className='stat-display'>
                <div className='column-style'>
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


        <div className='stat-bar'>
                <div className='site-info'>
                    <p className='site-url'>https://www.activectheory.net</p>
                    <p className='last-report'>Last Report: 3/24/19</p>
                </div>
                <div className='stat-display'>
                    <div className='column-style'>
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


            <div className='stat-bar'>
            <div className='site-info'>
                <p className='site-url'>https://www.dogstudio.be</p>
                <p className='last-report'>Last Report: 3/24/19</p>
            </div>
            <div className='stat-display'>
                <div className='column-style'>
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


        <div className='stat-bar'>
                <div className='site-info'>
                    <p className='site-url'>https://www.immersivegarden.com</p>
                    <p className='last-report'>Last Report: 3/24/19</p>
                </div>
                <div className='stat-display'>
                    <div className='column-style'>
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


            <div className='stat-bar'>
            <div className='site-info'>
                <p className='site-url'>https://www.Poetic.io</p>
                <p className='last-report'>Last Report: 3/24/19</p>
            </div>
            <div className='stat-display'>
                <div className='column-style'>
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


        <div className='stat-bar'>
                <div className='site-info'>
                    <p className='site-url'>https://www.Poetic.io</p>
                    <p className='last-report'>Last Report: 3/24/19</p>
                </div>
                <div className='stat-display'>
                    <div className='column-style'>
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
 


        </div>
        )
  }
}
export default StatBar;

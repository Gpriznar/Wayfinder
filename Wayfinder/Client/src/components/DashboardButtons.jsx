import React, { Component, Fragment } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import Breakpoint from 'react-socks';


class DashboardButtons extends Component {

handleSortButtonAZ = (e) => {
  this.props.handleSortButtonAZ();
}

handleSortButtonZA = (e) => {
  this.props.handleSortButtonZA();
}

render() {
  return (
    <Fragment>
    <div className="filter-add-website-row">
      <div className="filter-website-button">
        <div className="filter-button">
          <p>Filter:</p>
          <button type="button" className="add-button"><Link to="/addwebsite">Add Website</Link></button>
        </div>
      </div>
    </div>
    <Breakpoint medium down>
    <span><small className="asterisks">*Values are estimated and may vary. Run individual audits of low-performing sites.</small></span>
    </Breakpoint>
    </Fragment>
  );
}
}

const mapDispatchToProps = (dispatch) => {
  return {

    handleSortButtonAZ: (data) => dispatch({type: 'AtoZ'}),

    handleSortButtonZA: (data) => dispatch({type: 'ZtoA'})
  };
};

export default connect(null, mapDispatchToProps)(DashboardButtons);

/*
<button type="button" onClick={this.handleSortButtonAZ} className="a-z">A --> Z</button>
<button type="button" onClick={this.handleSortButtonZA} className="a-z">Z --> A</button>
*/

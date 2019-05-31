import React, { Component } from 'react';
import './AddWebsite.css';
import { Mutation } from 'react-apollo';
import { NavLink } from 'react-router-dom';
import { withRouter } from 'react-router-dom'
import { ADD_WEBSITE } from '../Utils/mutations';

class AddWebsite extends Component {
  constructor() {
    super();
    this.state = {
      name: '',
      url: '',
    };
  }

  handleTextBoxChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  }

  render() {
    return (
      <div className="WebsiteContainerBox">
        <div className="WebsiteBox">
          <h2 className="WebsiteTitle"> Add a Website to monitor </h2>
          <input className="WebsiteInputField" name="name" onChange={this.handleTextBoxChange} placeholder="Website Name" />
          <input className="WebsiteInputField" name="url" onChange={this.handleTextBoxChange} placeholder="URL" />
          <div className="SubmitBox">
            <NavLink to='/dashboard'><button className="cancel-button">Cancel</button></NavLink>
            <Mutation mutation={ADD_WEBSITE} variables={this.state}>
              {(createWebsite, { data, loading, error }) => {
                if (loading) return <p>loading...</p>;
                if (error) return <p>error...</p>;
                if (data) {
                  return (
                    <div className='divcheck'>
                      <button type="button" className="AddButton" onClick={createWebsite}>Submit</button>
                      <p>
                        {data.createWebsite.name}
                        was added.
                      </p>
                    </div>
                  );
                }
                return <button type="button" className="AddButton" onClick={createWebsite}>Submit</button>;
              }
              }
            </Mutation>
          </div>
        </div>
      </div>
    );
  }
}

export default AddWebsite;

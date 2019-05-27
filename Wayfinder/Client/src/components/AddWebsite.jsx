import React, { Component } from 'react';
import './AddWebsite.css';
import { Mutation } from 'react-apollo';
import gql from 'graphql-tag';

const ADD_WEBSITE = gql`
mutation createWebsite($name: String!, $url: String!){
  createWebsite(name: $name, url: $url) {
    name,
    url
  }
}
`;

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

  handleSubmitClick = () => {
    console.log(this.state.name);
    console.log(this.state.url);
  }

  render() {
    return (
      <div className="WebsiteContainerBox">
        <div className="WebsiteBox">
          <h2 className="WebsiteTitle"> Add a Website to monitor </h2>
          <input className="WebsiteInputField" name="name" onChange={this.handleTextBoxChange} placeholder="Website Name" />
          <input className="WebsiteInputField" name="url" onChange={this.handleTextBoxChange} placeholder="URL" />
          <div className="SubmitBox">
            <p> Cancel </p>
            <Mutation mutation={ADD_WEBSITE} variables={this.state}>
              {(createWebsite, { data, loading, error }) => {
                if (loading) return <p>loading...</p>;
                if (error) return <p>error...</p>;
                if (data) {
                  return (
                    <div>
                      <button type="button" className="AddButton" onClick={createWebsite}>Submit</button>
                      <p>{data.createWebsite.name} was added.</p>
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

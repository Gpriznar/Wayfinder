import React, { Component } from 'react';
import './AddWebsite.css';


export class AddWebsite extends Component {
  render() {
    return (
      <div className="WebsiteContainerBox">
        <div className="WebsiteBox">
        <h2 className="WebsiteTitle"> Add a Website to monitor </h2>
        <input className="WebsiteInputField" name="username" onChange={this.handleTextBoxChange} placeholder="Website Name" />
        <input className="WebsiteInputField" name="password" onChange={this.handleTextBoxChange} placeholder="URL" />
        <div className="SubmitBox">
        <p> Cancel </p>
        <button className="AddButton" onClick={this.handleSubmitClick}>Submit</button>
        </div>
        </div>
      </div>
    );
  }
}

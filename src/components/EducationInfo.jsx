import React, { Component } from "react";

export class EducationInfo extends Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
  }

  removeEducationInfo(){
    
  }

  handleChange(event) {
    this.props.onPersonalInfoChange(event.target.name, event.target.value);
  }

  render() {
    return (
      <form action="">
        <fieldset>
          <label htmlFor="institutionName">Institution Name:</label>
          <input
            type="text"
            placeholder="John Hopkins University"
            name="institutionName"
            value={this.props.educationInfo.institutionName}
            onChange={this.handleChange}
          />
          <label htmlFor="degree">Degree:</label>
          <input
            type="text"
            placeholder="Bachelor"
            name="degree"
            value={this.props.educationInfo.degree}
            onChange={this.handleChange}
          />
          <label htmlFor="subject">Subject:</label>
          <input
            type="text"
            placeholder="Software Engineering"
            name="email"
            value={this.props.educationInfo.subject}
            onChange={this.handleChange}
          />
          <label htmlFor="fromDate">From:</label>
          <input
            type="date"
            placeholder="2018"
            name="fromDate"
            value={this.props.educationInfo.fromDate}
            onChange={this.handleChange}
          />
          <label htmlFor="toDate">To:</label>
          <input
            type="date"
            placeholder="2022"
            name="toDate"
            value={this.props.educationInfo.toDate}
            onChange={this.handleChange}
          />
        </fieldset>
        <button onClick={this.removeEducationInfo}>Delete</button>
      </form>
    );
  }
}

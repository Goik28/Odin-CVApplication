import React, { Component } from "react";
import "../styles/EducationInfo.css";

export class EducationInfo extends Component {
  constructor(props) {
    super(props);
    this.removeEducationInfo = this.removeEducationInfo.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  removeEducationInfo(e) {
    e.preventDefault();
    this.props.onRemoveEducationInfo(this.props.educationInfoId);
  }

  handleChange(event) {
    this.props.onEducationInfoChange(
      this.props.educationInfoId,
      event.target.name,
      event.target.value
    );
  }

  render() {
    return (
      <li className="educationInfo-listItem">
        <div>
          <label htmlFor="institutionName">Institution Name:</label>
          <input
            type="text"
            placeholder="John Hopkins University"
            name="institutionName"
            value={this.props.educationInfo.institutionName}
            onChange={this.handleChange}
          />
          <label htmlFor="subject">Subject:</label>
          <input
            type="text"
            placeholder="Software Engineering"
            name="subject"
            value={this.props.educationInfo.subject}
            onChange={this.handleChange}
          />
        </div>
        <div>
          <label htmlFor="degree">Degree:</label>
          <input
            type="text"
            placeholder="Bachelor"
            name="degree"
            value={this.props.educationInfo.degree}
            onChange={this.handleChange}
          />
          <label htmlFor="fromDate">From:</label>
          <input
            type="month"
            name="fromDate"
            value={this.props.educationInfo.fromDate}
            onChange={this.handleChange}
          />
          <label htmlFor="toDate">To:</label>
          <input
            type="month"
            name="toDate"
            value={this.props.educationInfo.toDate}
            onChange={this.handleChange}
          />
        </div>
        <button onClick={this.removeEducationInfo}>Delete</button>
      </li>
    );
  }
}

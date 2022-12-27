import React, { Component } from "react";
import "../styles/CvFinal.css"

export class CvFinal extends Component {
  constructor(props) {
    super(props);
    this.populateEducation = this.populateEducation.bind(this);
    this.populateExperience = this.populateExperience.bind(this);
  }

  populateEducation() {
    return this.props.cvInfo.education.map((value, index) => {
      return (
        <li key={index}>
          <ul>
            <li>
              {value.subject} at {value.institutionName}
            </li>
            <li>
              {value.degree} - from {value.fromDate.substr(0, 4)} to{" "}
              {value.toDate.substr(0, 4)}
            </li>
          </ul>
        </li>
      );
    });
  }

  populateExperience() {
    return this.props.cvInfo.professional.map((value, index) => {
      return (
        <li key={index}>
          <ul>
            <li>
              {value.positionTitle} at {value.companyName} - from{" "}
              {value.fromDate.substr(0, 4)} to {value.toDate.substr(0, 4)}
            </li>
            <li>{value.mainResponsibility}</li>
          </ul>
        </li>
      );
    });
  }

  render() {
    return (
      <div className="cvFinal">
        <div className="personalInfo">
          <div className="who">
            <h1>{this.props.cvInfo.personalInfo.fullName}</h1>
            <h3>{this.props.cvInfo.personalInfo.title}</h3>
            <h3>{this.props.cvInfo.personalInfo.email}</h3>
          </div>
          <p className="description">
            {this.props.cvInfo.personalInfo.description}
          </p>
        </div>
        <div className="education">
          Education
          <ul>{this.populateEducation()}</ul>
        </div>
        <div className="experience">
          Experience
          <ul>{this.populateExperience()}</ul>
        </div>
      </div>
    );
  }
}

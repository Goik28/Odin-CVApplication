import React, { Component } from "react";
import { EducationInfo } from "./EducationInfo";

export class Education extends Component {
  constructor(props) {
    super(props);
    this.addEducationInfo = this.addEducationInfo.bind(this);
    this.onEducationInfoChange = this.onEducationInfoChange.bind(this);
    this.populateEducationInfo = this.populateEducationInfo.bind(this);
    this.onRemoveEducationInfo = this.onRemoveEducationInfo.bind(this);
  }

  addEducationInfo(e) {
    e.preventDefault();
    this.props.addEducationInfo({
      institutionName: "",
      degree: "",
      subject: "",
      fromDate: "",
      toDate: "",
    });
  }

  populateEducationInfo() {
    return this.props.education.map((value, index) => {
      return (
        <EducationInfo
          key={index}
          educationInfoId={index}
          educationInfo={{
            institutionName: value.institutionName,
            degree: value.degree,
            subject: value.subject,
            fromDate: value.fromDate,
            toDate: value.toDate,
          }}
          onRemoveEducationInfo={this.onRemoveEducationInfo}
          onEducationInfoChange={this.onEducationInfoChange}
        />
      );
    });
  }

  onEducationInfoChange(index, key, value) {
    this.props.onEducationInfoChange(index, key, value);
  }

  onRemoveEducationInfo(index) {
    this.props.removeEducationInfo(index);
  }

  render() {
    return (
      <fieldset>
        <legend>Education</legend>
        <button onClick={this.addEducationInfo}>Add Education Info</button>
        <ol>{this.populateEducationInfo()}</ol>
      </fieldset>
    );
  }
}

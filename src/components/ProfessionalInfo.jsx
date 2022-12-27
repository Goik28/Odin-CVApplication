import React, { Component } from "react";
import "../styles/ProfessionalInfo.css";

export class ProfessionalInfo extends Component {
  constructor(props) {
    super(props);
    this.removeProfessionalInfo = this.removeProfessionalInfo.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  removeProfessionalInfo(e) {
    e.preventDefault();
    this.props.onRemoveProfessionalInfo(this.props.professionalInfoId);
  }

  handleChange(event) {
    this.props.onProfessionalInfoChange(
      this.props.professionalInfoId,
      event.target.name,
      event.target.value
    );
  }

  render() {
    return (
      <li className="professionalInfo-listItem">
        <div>
          <label htmlFor="companyName">Company:</label>
          <input
            type="text"
            placeholder="The Odin Project inc."
            name="companyName"
            value={this.props.professionalInfo.companyName}
            onChange={this.handleChange}
          />
          <label htmlFor="positionTitle">Position:</label>
          <input
            type="text"
            placeholder="Software Engineer"
            name="positionTitle"
            value={this.props.professionalInfo.positionTitle}
            onChange={this.handleChange}
          />
          <label htmlFor="fromDate">From:</label>
          <input
          id="fromDate"
            type="month"
            name="fromDate"
            value={this.props.professionalInfo.fromDate}
            onChange={this.handleChange}
          />
        </div>
        <div>
          <label htmlFor="mainResponsibility">Main Responsibility:</label>
          <input
            placeholder="Full-stack development, requirements gathering, stakeholders representation..."
            name="mainResponsibility"
            value={this.props.professionalInfo.mainResponsibility}
            onChange={this.handleChange}
          />
          <label htmlFor="toDate">To:</label>
          <input
          id="toDate"
            type="month"
            name="toDate"
            value={this.props.professionalInfo.toDate}
            onChange={this.handleChange}
          />
        </div>
        <button onClick={this.removeProfessionalInfo}>Delete</button>
      </li>
    );
  }
}

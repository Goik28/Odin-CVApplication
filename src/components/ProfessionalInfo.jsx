import React, { Component } from "react";

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
      <form action="">
        <fieldset>
          <label htmlFor="companyName">Company Name:</label>
          <input
            type="text"
            placeholder="The Odin Project inc."
            name="companyName"
            value={this.props.professionalInfo.companyName}
            onChange={this.handleChange}
          />
          <label htmlFor="positionTitle">Position Title:</label>
          <input
            type="text"
            placeholder="Software Engineer"
            name="positionTitle"
            value={this.props.professionalInfo.positionTitle}
            onChange={this.handleChange}
          />
          <label htmlFor="mainResponsibility">Main Responsibility:</label>
          <textarea
            placeholder="Full-stack development, requirements gathering, stakeholders representation..."
            name="mainResponsibility"
            value={this.props.professionalInfo.mainResponsibility}
            onChange={this.handleChange}
          />
          <label htmlFor="fromDate">From:</label>
          <input
            type="date"
            name="fromDate"
            value={this.props.professionalInfo.fromDate}
            onChange={this.handleChange}
          />
          <label htmlFor="toDate">To:</label>
          <input
            type="date"
            name="toDate"
            value={this.props.professionalInfo.toDate}
            onChange={this.handleChange}
          />
          <button onClick={this.removeProfessionalInfo}>Delete</button>
        </fieldset>
      </form>
    );
  }
}

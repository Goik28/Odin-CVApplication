import React, { Component } from "react";

export class PersonalInfo extends Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.props.onPersonalInfoChange(event.target.name, event.target.value);
  }

  render() {
    return (
      <form action="">
        <fieldset>
          <legend>Personal Information</legend>
          <label htmlFor="fullName">Full Name:</label>
          <input
            type="text"
            placeholder="Jhon Doe"
            name="fullName"
            value={this.props.personalInfo.fullName}
            onChange={this.handleChange}
          />
          <label htmlFor="title">Title:</label>
          <input
            type="text"
            placeholder="Software Engineer"
            name="title"
            value={this.props.personalInfo.title}
            onChange={this.handleChange}
          />
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            placeholder="jhon@doe.com"
            name="email"
            value={this.props.personalInfo.email}
            onChange={this.handleChange}
          />
          <label htmlFor="description">Description:</label>
          <textarea
            placeholder="Your description here..."
            name="description"
            value={this.props.personalInfo.description}
            onChange={this.handleChange}
          />
        </fieldset>
      </form>
    );
  }
}

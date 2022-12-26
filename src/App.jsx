import React, { Component } from "react";
import { Education } from "./components/Education";
import { PersonalInfo } from "./components/PersonalInfo";

export class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      personalInfo: {
        fullName: "",
        title: "",
        email: "",
        description: "",
      },
      education: [],
    };
    this.onPersonalInfoChange = this.onPersonalInfoChange.bind(this);
    this.addEducationInfo = this.addEducationInfo.bind(this);
    this.onEducationInfoChange = this.onEducationInfoChange.bind(this);
    this.removeEducationInfo = this.removeEducationInfo.bind(this);
  }

  onPersonalInfoChange(key, value) {
    this.setState({
      personalInfo: { ...this.state.personalInfo, [key]: value },
    });
  }

  addEducationInfo(info) {
    this.setState({ education: this.state.education.concat([info]) });
  }

  onEducationInfoChange(index, key, value) {
    const newEducation = [...this.state.education];
    newEducation[index][key] = value;
    this.setState({ education: newEducation });
  }

  removeEducationInfo(index) {
    if (index == 0) {
      const newEducation = this.state.education.slice(index + 1);
      return this.setState({ education: newEducation });
    } else if (index == this.state.education.length - 1) {
      const newEducation = this.state.education.slice(0, -1);
      return this.setState({ education: newEducation });
    } else {
      const newEducation = this.state.education
        .slice(0, index)
        .concat(this.state.education.slice(index + 1));
      return this.setState({ education: newEducation });
    }
  }

  render() {
    return (
      <main>
        <PersonalInfo
          personalInfo={this.state.personalInfo}
          onPersonalInfoChange={this.onPersonalInfoChange}
        ></PersonalInfo>
        <Education
          education={this.state.education}
          addEducationInfo={this.addEducationInfo}
          onEducationInfoChange={this.onEducationInfoChange}
          removeEducationInfo={this.removeEducationInfo}
        ></Education>
      </main>
    );
  }
}

export function Header() {
  return <header>CV GENERATOR</header>;
}

export function Footer() {
  return (
    <footer>
      Created by<a href="https://github.com/Goik28"> Goik28 </a>for the
      CV-Application project on The Odin Project course
    </footer>
  );
}

//<Professional />

import React, { Component } from "react";
import { PersonalInfo } from "./components/PersonalInfo";
import { Education } from "./components/Education";
import { Professional } from "./components/Professional";
import { CvFinal } from "./components/CvFinal";

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
      professional: [],
    };
    this.onPersonalInfoChange = this.onPersonalInfoChange.bind(this);
    this.addEducationInfo = this.addEducationInfo.bind(this);
    this.onEducationInfoChange = this.onEducationInfoChange.bind(this);
    this.removeEducationInfo = this.removeEducationInfo.bind(this);
    this.addProfessionalInfo = this.addProfessionalInfo.bind(this);
    this.onProfessionalInfoChange = this.onProfessionalInfoChange.bind(this);
    this.removeProfessionalInfo = this.removeProfessionalInfo.bind(this);
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

  addProfessionalInfo(info) {
    this.setState({ professional: this.state.professional.concat([info]) });
  }

  onProfessionalInfoChange(index, key, value) {
    const newProfessional = [...this.state.professional];
    newProfessional[index][key] = value;
    this.setState({ professional: newProfessional });
  }

  removeProfessionalInfo(index) {
    if (index == 0) {
      const newProfessional = this.state.professional.slice(index + 1);
      return this.setState({ professional: newProfessional });
    } else if (index == this.state.professional.length - 1) {
      const newProfessional = this.state.professional.slice(0, -1);
      return this.setState({ professional: newProfessional });
    } else {
      const newProfessional = this.state.professional
        .slice(0, index)
        .concat(this.state.professional.slice(index + 1));
      return this.setState({ professional: newProfessional });
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
        <Professional
          professional={this.state.professional}
          addProfessionalInfo={this.addProfessionalInfo}
          onProfessionalInfoChange={this.onProfessionalInfoChange}
          removeProfessionalInfo={this.removeProfessionalInfo}
        ></Professional>
        <CvFinal cvInfo={this.state}></CvFinal>
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

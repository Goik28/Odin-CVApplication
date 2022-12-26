import React, { Component } from "react";
import { ProfessionalInfo } from "./ProfessionalInfo";

export class Professional extends Component {
  constructor(props) {
    super(props);
    this.addProfessionalInfo = this.addProfessionalInfo.bind(this);
    this.onProfessionalInfoChange = this.onProfessionalInfoChange.bind(this);
    this.populateProfessionalInfo = this.populateProfessionalInfo.bind(this);
    this.onRemoveProfessionalInfo = this.onRemoveProfessionalInfo.bind(this);
  }

  addProfessionalInfo(e) {
    e.preventDefault();
    this.props.addProfessionalInfo({
      companyName: "",
      positionTitle: "",
      mainResponsibility: "",
      fromDate: "",
      toDate: "",
    });
  }

  populateProfessionalInfo() {
    return this.props.professional.map((value, index) => {
      return (
        <ProfessionalInfo
          key={index}
          professionalInfoId={index}
          professionalInfo={{
            companyName: value.companyName,
            positionTitle: value.positionTitle,
            mainResponsibility: value.mainResponsibility,
            fromDate: value.fromDate,
            toDate: value.toDate,
          }}
          onRemoveProfessionalInfo={this.onRemoveProfessionalInfo}
          onProfessionalInfoChange={this.onProfessionalInfoChange}
        />
      );
    });
  }

  onProfessionalInfoChange(index, key, value) {
    this.props.onProfessionalInfoChange(index, key, value);
  }

  onRemoveProfessionalInfo(index) {
    this.props.removeProfessionalInfo(index);
  }

  render() {
    return (
      <fieldset>
        <legend>Professional</legend>
        <button onClick={this.addProfessionalInfo}>Add Professional Info</button>
        <ol>{this.populateProfessionalInfo()}</ol>
      </fieldset>
    );
  }
}

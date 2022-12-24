import React, { Component } from "react";

export class Education extends Component {
  constructor(props) {
    super(props);
    counter = 0;
  }

  addEducationInfo(){
    this.counter++
    this.props.addEducationInfo();

  }

  render() {

    return (
        <form action="">
        <fieldset>
            <legend>Education</legend>
        <button onClick={addEducationInfo}>Add Education Info</button>
        <ol></ol>
        </fieldset>
        </form>
    );
  }
}

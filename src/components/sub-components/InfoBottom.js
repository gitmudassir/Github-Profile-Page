import React, { Component } from "react";

class InfoBottom extends Component {
  render() {
    return (
      <div>
        <p>{this.props.company}</p>
        <p>{this.props.location}</p>
        <p>Email</p>
      </div>
    );
  }
}

export default InfoBottom;

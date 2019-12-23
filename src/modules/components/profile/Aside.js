import React, { Component } from "react";
import "../../../styles/App.scss";
// import InfoBottom from "./InfoBottom";

class Aside extends Component {
  render() {
    return (
      <aside className="Left-panel">
        <div>
          <img className="Avatar" src={this.props.avatar_url} alt="Profile pic"/>
          <h3>{this.props.name}</h3>
          <h4 className="username">{this.props.login}</h4>
          <p className="bio">{this.props.bio}</p>
        </div>
        <button className="edit-bio">Edit bio</button>
        <hr class="hr"/>
        <div>
          <p className="company">{this.props.company}</p>
          <p className="location">{this.props.location}</p>
          <p className="email">Email</p>
        </div>
      </aside>
    );
  }
}

export default Aside;

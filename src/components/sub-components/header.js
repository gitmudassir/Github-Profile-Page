import React, { Component } from "react";
import "../../App.css";
import logo from "../../logo.png";

class Header extends Component {
  render() {
    return (
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Pull Requests</p>
        <p>Issues</p>
        <p>Marketplace</p>
        <p>Explore</p>
        <a
          className="App-link"
          href="#"
          // target="_blank"
          rel="noopener noreferrer"
        >
          Sign out
        </a>
      </header>
    );
  }
}


export default Header
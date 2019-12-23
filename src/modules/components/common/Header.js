import React, { Component } from "react";
import "../../../styles/App.scss";
import logo from "../../../logo.svg";
import bell from "../../../img/notification.svg";
import plus from "../../../img/plus.svg";

class Header extends Component {
  render() {
    return (
      <header className="App-header">
        <div className="h-wrapper">
          <a href="#">
            <object
              type="image/svg+xml"
              data={logo}
              className="App-logo"
              alt="logo"
            />
          </a>
          <input className="top-search" placeholder="Search Github" />
          <nav className="top-nav">
            <ul>
              <li>Pull requests</li>
              <li>Issues</li>
              <li>Marketplace</li>
              <li>Explore</li>
            </ul>
          </nav>
          <nav>
            <ul>
              <li>
                <object
                  type="image/svg+xml"
                  data={bell}
                  className="icons"
                  alt="logo"
                />
              </li>
              <li>
                <object
                  type="image/svg+xml"
                  data={plus}
                  className="icons plus"
                  alt="logo"
                />
              </li>
              <li>
                <object
                  type="image/png"
                  data={this.props.avatar}
                  className="icons avatar"
                  alt="logo"
                />
              </li>
            </ul>
          </nav>
        </div>
      </header>
    );
  }
}

export default Header;

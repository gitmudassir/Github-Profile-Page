import React from "react";
import "../App.css";
import Repositories from "./Repositories";
import Header from "./sub-components/header";
import InfoTop from "./sub-components/InfoTop";
import InfoBottom from "./sub-components/InfoBottom";
import { connect } from "react-redux";

class Profile extends React.Component {
  state = {
    titles: []
  };

  componentDidMount() {
    this.fetchInfo();
    this.fetchRepo();
  }

  fetchInfo = () => {
    fetch("https://api.github.com/users/supreetsingh247")
      .then(response => response.json())
      .then(result =>
        this.setState({
          name: result.name,
          id: result.login,
          bio: result.bio,
          company: result.company,
          location: result.location
        })
      );
  };

  fetchRepo() {
    fetch("https://api.github.com/users/supreetsingh247/repos")
      .then(response => response.json())
      .then(result => {
        var titles = [];
        result.forEach(element => titles.push(element));
        this.setState({ repName: titles });
      });
  }
  render() {
    return (
      <div className="App">
        <Header />

        <div className="App-body">
          <div className="Left-panel">
            <InfoTop
              id={this.state.id}
              name={this.state.name}
              bio={this.state.bio}
            />

            <button className="Edit-bio">Edit bio</button>
            <div className="hr"></div>
            <InfoBottom
              location={this.state.location}
              company={this.state.company}
            />
          </div>
          <div className="Right-panel">
            <div className="App-Nav">
              <a href="#">
                <p>Overview</p>
              </a>
              <a href="#">
                <p>Repositories</p>
              </a>
              <a href="#">
                <p>Stars</p>
              </a>
              <a href="#">
                <p>Following</p>
              </a>
            </div>
            <div className="hr"></div>
            <Repositories repName={this.state.repName} />
            <div></div>
          </div>
        </div>
      </div>
    );
  }
}
export default Profile;

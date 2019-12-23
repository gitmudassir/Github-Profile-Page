import React, { Component } from "react";
import PropTypes from 'prop-types';
import "../../../styles/App.scss";
import { profileActions } from "../../../actions";
import { connect } from "react-redux";
import Search from "./_search";

class Repositories extends Component {

  static propTypes = {
    repos: PropTypes.array.isRequired
  };


  render() {
    const { repos } = this.props;
    console.log(this.props);
    return (
      <div>
        <Search />

        <hr class="hr" />

        {repos && (
          <ul className="Repositories">
            {repos.map(item => (
              <li key={item.id}>
                <span className="App-link">{item.name}</span>
                <span className="description">{item.description}</span>
                <span className="language">{item.language}</span>
                <hr class="hr" />
              </li>
            ))}
          </ul>
        )}
      </div>
    );
  }
}

function mapState(state) {
  const { repos } = state.repositories;
  return { repos };
}

const mapActions = {
  get_repo: profileActions.get_repositories
};
const connectedRepositories = connect(mapState, mapActions)(Repositories);
export default connectedRepositories;

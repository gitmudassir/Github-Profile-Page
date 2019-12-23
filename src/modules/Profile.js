import React from "react";
import "../styles/App.scss";
import Header from "./components/common/Header";
import Aside from "./components/profile/Aside";
import Section from "./components/profile/Section";
import { profileActions } from "../actions";
import { connect } from "react-redux";

class Profile extends React.Component {
  componentDidMount() {
    this.props.get_user();
  }

  render() {
    const { user } = this.props;
    return (
      <div className="App">
        {user && <Header avatar={user.avatar_url} />}
        <div className="App-body">
          {user && <Aside {...user} />}
          <Section repName={""} />
        </div>
      </div>
    );
  }
}

function mapState(state) {
  const { user } = state.profile;
  return { user };
}

const mapActions = {
  get_user: profileActions.get_userInfo
};

const connectedProfile = connect(mapState, mapActions)(Profile);
export default connectedProfile;

import React from "react";
import "../../../styles/App.scss";
import { profileActions } from "../../../actions";
import { connect } from "react-redux";

class Search extends React.Component {
    componentDidMount() {
        this.props.get_repo(this.state.type, this.state.lang, this.state.value);
      }
    
    state = {
        type: "All",
        lang: "All",
        value: "",
        filterData: []
    }


  handleType = action => {
        this.setState({type: action})      
        setTimeout(() => this.props.get_repo(this.state.type, this.state.lang, this.state.value), 300)
  }
  handleLang = action => {
    this.setState({lang: action})  
    setTimeout(() => this.props.get_repo(this.state.type, this.state.lang, this.state.value), 300)
  }

  filterList = e => {
    this.setState({ value: e.target.value });
    setTimeout(() => this.props.get_repo(this.state.type, this.state.lang, this.state.value), 100)
  };

  render() {

    console.log(this.props.repos)
    const searchBox = (
        <input
          type="text"
          name="search"
          id="search"
          placeholder="Find a repository..."
          onChange={this.filterList}
          value={this.state.value}
        />)
    return (
        <div className="search-area">
        {searchBox}
        <div className="search-options">
          <div class="dropdown">
    <button class="dropbtn">Type: <span className="title">{this.state.type}</span>▼</button>
            <div class="dropdown-content">
              <button onClick={() => this.handleType("all")}>All</button>
              <button onClick={() => this.handleType("private")}>Private</button>
              <button onClick={() => this.handleType("public")}>Public</button> 
              <button onClick={() => this.handleType("sources")}>Sources</button>
              <button onClick={() => this.handleType("forks")}>Forks</button>
              <button onClick={() => this.handleType("archived")}>Archived</button>
              <button onClick={() => this.handleType("mirrors")}>Mirrors</button>
            </div>
          </div>
          <div class="dropdown">
            <button class="dropbtn">Language: <span className="title">{this.state.lang}</span>▼</button>
            <div class="dropdown-content">
              <button onClick={() => this.handleLang("all")}>All</button>
              <button onClick={() => this.handleLang("JavaScript")}>JavaScript</button>
              <button onClick={() => this.handleLang("CSS")}>CSS</button>
              <button onClick={() => this.handleLang("HTML")}>HTML</button>
              <button onClick={() => this.handleLang("other")}>Other</button>
            </div>
          </div>
        </div>
        <button className="new">New</button>
      </div>
    );
  }
}

function mapState(state){
    const { repos } = state.repositories
    return { repos }
}

const mapActions = {
  get_repo: profileActions.get_repositories,
  update_repo: profileActions.update_repositories
};

export default connect(mapState, mapActions)(Search);

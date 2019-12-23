import React, { Component } from "react";
import Repositories from "./_repositories";
import "../../../styles/App.scss";

class Section extends Component {

  constructor(props){
    super(props)
    this.state = {
      RepName: []
    }
  }
  

  static getDerivedStateFromProps(props, state) {
    if (props.repName !== state.RepName) {
        return {
          RepName: props.repName
        }
    }
    return null;
  }

  render() {
    console.log(this.state.RepName)
    return (
      <section className="Right-panel">
        <div className="navigation">
            <div  className="l-navigation">
              <ul>
                  <li><h5><a href="#">Overview</a></h5></li>
                  <li><h5><a href="#">Repositories</a></h5></li>
                  <li><h5><a href="#">Stars</a></h5></li>
                  <li><h5><a href="#">Followers</a></h5></li>
                  <li><h5><a href="#">Following</a></h5></li>
              </ul>
            </div>
        </div>
        <Repositories />

      </section>
    );
  }
}

export default Section;

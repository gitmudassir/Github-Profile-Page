import React, { Component } from "react";
import "../App.css";

function Repositories(props) {
    const items = props.repName;
  const listItems = items.map(item => <li>{items}</li>);

  return <ul>{listItems}</ul>;
}

export default Repositories;

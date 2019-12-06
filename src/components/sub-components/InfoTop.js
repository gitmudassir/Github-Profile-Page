import React, { Component } from "react";

class InfoTop extends Component {
    render(){
        return(
<div>        
        <img src="https://www.example.com/foo.jpg" />
        <h1>{this.props.name}</h1>
        <p>{this.props.id}</p>
        <p>{this.props.bio}</p>
</div>
        )
    }
}

export default InfoTop
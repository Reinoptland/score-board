import React, { Component } from "react";

export default class Player extends Component {
  render() {
    console.log("do we have props?", this.props);
    return (
      <div>
        <h1>Name: {this.props.name}</h1>
        <h2>Score: {this.props.score}</h2>
      </div>
    );
  }
}

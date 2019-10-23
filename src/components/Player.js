import React, { Component } from "react";

export default class Player extends Component {
  handleClick = () => {
    this.props.incrementScore();
  };

  render() {
    console.log("do we have props?", this.props);
    return (
      <div>
        <h1>Name: {this.props.name}</h1>
        <h2>Score: {this.props.score}</h2>
        <button onClick={this.handleClick}>+</button>
      </div>
    );
  }
}

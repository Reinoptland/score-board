import React from "react";

// A CONTROLLED FORM
export default class AddPlayer extends React.Component {
  // store state of the form in this.state
  state = {
    // initial value of form
    userName: ""
  };

  // Handle changes in input field
  // Event handler so Arrow function
  handleChange = event => {
    this.setState({ userName: event.target.value });
  };

  // Hanlde submission of form
  // Event handler so Arrow function
  handleSubmit = event => {
    // preventDefault so the page does not refresh
    event.preventDefault();
    console.log("Inside state", this.state);
    // Create a player first
    this.props.addPlayer(this.state.userName);

    // we are done typing, lets clear the form
    this.setState({ userName: "" });
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>Name</label>
        {/* Get value from the state, add event handler to update this value */}
        <input value={this.state.userName} onChange={this.handleChange} />
        <input type="submit" />
      </form>
    );
  }
}

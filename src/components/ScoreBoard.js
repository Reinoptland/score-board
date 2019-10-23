// importing React and the Component class
import React, { Component } from "react";

// import PLayer component
import Player from "./Player";
import AddPlayer from "./AddPlayer";

// export the following thing:
// The ScoreBoard class
// Which is a child class of React.Component
export default class Scoreboard extends Component {
  // define initial state: an array of players with id, name and score
  state = {
    players: [
      { id: 1, name: "Kelley", score: 11 },
      { id: 2, name: "David", score: 14 },
      { id: 3, name: "Rein", score: 4 }
    ]
  };

  // Add player callback prop
  addPlayer = name => {
    // checking if name is in there
    console.log("NAME in cbprop", name);
    // create new player
    const player = { id: this.state.players.length + 1, name: name, score: 0 };

    // How to update players:
    // Not like this: this.state.players.push(player) // ?????? NO! react does not know what you did!

    // create new array using ... spread, add player at the end
    const players = [...this.state.players, player];
    // setState at the end
    this.setState({ players: players });
  };

  // define callback prop
  incrementScore = userId => {
    console.log("Hello! From incrementScore in ScoreBoard");
    console.log("Player", userId, "scored a point");

    // we are going to use:

    const updatedPlayers = this.state.players.map(player => {
      // a conditional
      if (player.id === userId) {
        console.log("Update this player");
        // make a copy of the player, with updated score
        return { ...player, score: player.score + 1 };
      }

      console.log("Do not update this player");
      return player;
    });

    // setState
    this.setState({ players: updatedPlayers });
  };

  // define a render method
  render() {
    // determines what the component displays
    // returns a JSX expression -> which is displayed as HTML in the DOM
    return (
      <div className="scoreboard">
        <h1>Scoreboard</h1>
        {/* Pass addPlayer callback prop */}
        <AddPlayer addPlayer={this.addPlayer} />
        <ul>
          {/* 
            We interpolate an expression:
            - We take the players array in the state
            - We map over this array
            - For each element we return a Player element
            - We pass props name, score and id to the Player component
          */}
          {this.state.players
            .sort((player1, player2) => player2.score - player1.score)
            .map(player => (
              <Player
                id={player.id}
                name={player.name}
                score={player.score}
                key={player.id}
                // pass callback to Player as a prop
                incrementScore={this.incrementScore}
              />
            ))}
        </ul>
      </div>
    );
  }
}

// importing React and the Component class
import React, { Component } from "react";

// import PLayer component
import Player from "./Player";

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

  // define a render method
  render() {
    // determines what the component displays
    // returns a JSX expression -> which is displayed as HTML in the DOM
    return (
      <div className="scoreboard">
        <h1>Scoreboard</h1>
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
              />
            ))}
        </ul>
      </div>
    );
  }
}

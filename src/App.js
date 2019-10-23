import React from "react";
import logo from "./logo.svg";
import "./App.css";
import ScoreBoard from "./components/ScoreBoard";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <ScoreBoard />
      </header>
    </div>
  );
}

export default App;

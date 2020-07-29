import React, { Component } from "react";
import Board from "./components/Board";
import "./App.css";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userName: "Luke",
      nextPlayer: true,
      squaresList: Array(9).fill(""),
      status: "playing",
      test: [],
      stateIndex: 0,
      history: [Array(9).fill("")],
      // squares(6)fill['']
    };
  }
  setParentsState = (obj) => {
    this.setState(obj);
    console.log("app set state", this.state.status);
  };
  render() {
    // console.log("app state", this.state.status);
    return (
      <>
        <h1>Tic-Tac-Hasagi</h1>
        <div className="game-interface">
          <div className="player-row">
            <img
              src="https://64.media.tumblr.com/90c38df9941613e64b5aad7578be4c24/tumblr_n0ugvyotrC1ssg9yfo1_500.gif"
              alt="yasuo"
              id="yasuo"
            />
            <h1>VS</h1>
            <img
              src="https://pa1.narvii.com/5800/fd7c458ed3fc68935bb3d4584b7b060bee4bba06_hq.gif"
              alt="teemo"
              id="teemo"
            />
          </div>
          {/* <h3>Username : {this.state.userName} </h3> */}
          <h3>Game is {this.state.status}</h3>
          <div className="flex-container">
            <ol>ranking</ol>
            <Board
              history={this.state.history}
              stateIndex={this.state.stateIndex}
              test={this.state.test}
              status={this.state.status}
              nextPlayer={this.state.nextPlayer}
              squaresList={this.state.squaresList}
              setParentsState={this.setParentsState}
            />
          </div>
        </div>
      </>
    );
  }
}

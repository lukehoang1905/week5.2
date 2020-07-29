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
      <div>
        <h1>ttt</h1>
        <h3>Username : {this.state.userName} </h3>
        <div className="flex-container">
          {" "}
          <Board
            history={this.state.history}
            stateIndex={this.state.stateIndex}
            test={this.state.test}
            status={this.state.status}
            nextPlayer={this.state.nextPlayer}
            squaresList={this.state.squaresList}
            setParentsState={this.setParentsState}
          />
          <ol>ranking</ol>
        </div>
      </div>
    );
  }
}

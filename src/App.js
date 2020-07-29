import React, { Component } from "react";
import Board from "./components/Board";
import "./App.css";
import ReactFacebookLogin from "react-facebook-login";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userName: "",
      nextPlayer: true,
      squaresList: Array(9).fill(""),
      status: "playing",
      test: [],
      stateIndex: 0,
      history: [Array(9).fill("")],
      startTime: true,
      beginTime: 0,
      duration: 0,
      scoreTable: [],
      // squares(6)fill['']
    };
  }
  getHigh = async () => {
    const url = `http://ftw-highscores.herokuapp.com/tictactoe-dev`;
    const response = await fetch(url);
    let data = await response.json();
    this.setState({ scoreTable: data.items });
  };
  setParentsState = (obj) => {
    this.setState(obj);
  };
  responseFacebook = (resp) => {
    this.setState({ userName: resp.name });
  };
  render() {
    if (!this.state.userName) {
      return (
        <ReactFacebookLogin
          autoLoad={true}
          appId="295449538433724"
          fields="name,email,picture"
          callback={(resp) => this.responseFacebook(resp)}
        />
      );
    }
    setInterval(this.getHigh, 3000);
    return (
      <>
        {" "}
        <h1>Tic-Tac-Hasagi</h1>
        <div className="game-interface">
          <div className="player-row">
            <div className="player-1">
              <img
                src="https://64.media.tumblr.com/90c38df9941613e64b5aad7578be4c24/tumblr_n0ugvyotrC1ssg9yfo1_500.gif"
                alt="yasuo"
                id="yasuo"
              />
              <p>{this.state.userName}</p>
            </div>
            <h1>VS</h1>
            <div className="player-2">
              <img
                src="https://pa1.narvii.com/5800/fd7c458ed3fc68935bb3d4584b7b060bee4bba06_hq.gif"
                alt="teemo"
                id="teemo"
              />
              <p>Teemo</p>
            </div>
          </div>
          {/* <h3>Username : {this.state.userName} </h3> */}
          <h3>Game is {this.state.status}</h3>
          <div className="flex-container">
            <ul>
              <h3>This round</h3>
              <li>{(this.state.duration / 1000).toFixed(2)} s</li>
              <br />
              <h3>High score</h3>
              <ol>
                {this.state.scoreTable.map((data) => {
                  return (
                    <li>
                      Player:{data.player} Score:{data.score}
                    </li>
                  );
                })}
              </ol>
            </ul>
            <Board
              history={this.state.history}
              stateIndex={this.state.stateIndex}
              test={this.state.test}
              status={this.state.status}
              nextPlayer={this.state.nextPlayer}
              squaresList={this.state.squaresList}
              setParentsState={this.setParentsState}
              startTime={this.state.startTime}
              duration={this.state.duration}
              beginTime={this.state.beginTime}
              userName={this.state.userName}
            />
          </div>
        </div>
      </>
    );
  }
}

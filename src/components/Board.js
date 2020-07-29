import React, { Component } from "react";
import Square from "./Square";
import "./Board.css";
//this is the whole board
//this will perform the function that called
export default class Board extends Component {
  selectSquare = (id) => {
    let testArray = this.props.test;
    let array = this.props.squaresList;
    array = JSON.parse(JSON.stringify(array));

    if (array[id] !== "" || this.props.status !== "playing") {
      return;
    }

    array[id] = this.props.nextPlayer
      ? "https://thumbs.gfycat.com/BigCircularBabirusa-max-1mb.gif"
      : "https://www.wykop.pl/cdn/c3201142/comment_qmmyE9GnNFOM0wbGqkpN6gdDpGpNlqxB.gif";
    this.props.history.push(array);
    let ndex = this.props.stateIndex + 1;
    testArray[testArray.length] = `Go back to ${ndex}`;

    this.props.setParentsState({
      squaresList: array,
      nextPlayer: !this.props.nextPlayer,
      test: testArray,
      stateIndex: ndex,
      history: this.props.history,
    });

    this.calculateWinner(array);
  };

  goBack = (index) => {
    this.props.setParentsState({ stateIndex: index });
    return;
  };

  calculateWinner = (squaresList) => {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];
    if (!squaresList.includes("")) {
      this.props.setParentsState({
        status: "is draw",
      });
      return;
    }
    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];
      if (
        squaresList[a] &&
        squaresList[a] === squaresList[b] &&
        squaresList[a] === squaresList[c]
      ) {
        let winner =
          squaresList[a] ===
          "https://thumbs.gfycat.com/BigCircularBabirusa-max-1mb.gif"
            ? "Yasuo"
            : "Teemo";

        this.props.setParentsState({
          status: `Over ${winner} has won`,
        });
        return squaresList[a];
      }
    }
    return null;
  };

  render() {
    // to update latest status state

    return (
      <>
        <div className="flex-board">
          <div className="board">
            <div style={{ display: "flex" }}>
              <Square
                id="0"
                selectSquare={this.selectSquare}
                value={this.props.history[this.props.stateIndex][0]}
              />
              <Square
                id="1"
                selectSquare={this.selectSquare}
                value={this.props.history[this.props.stateIndex][1]}
              />
              <Square
                id="2"
                selectSquare={this.selectSquare}
                value={this.props.history[this.props.stateIndex][2]}
              />
            </div>
            <div style={{ display: "flex" }}>
              <Square
                id="3"
                selectSquare={this.selectSquare}
                value={this.props.history[this.props.stateIndex][3]}
              />
              <Square
                id="4"
                selectSquare={this.selectSquare}
                value={this.props.history[this.props.stateIndex][4]}
              />
              <Square
                id="5"
                selectSquare={this.selectSquare}
                value={this.props.history[this.props.stateIndex][5]}
              />
            </div>
            <div style={{ display: "flex" }}>
              <Square
                id="6"
                selectSquare={this.selectSquare}
                value={this.props.history[this.props.stateIndex][6]}
              />
              <Square
                id="7"
                selectSquare={this.selectSquare}
                value={this.props.history[this.props.stateIndex][7]}
              />
              <Square
                id="8"
                selectSquare={this.selectSquare}
                value={this.props.history[this.props.stateIndex][8]}
              />
            </div>
          </div>
          <ol>
            <li>
              <button onClick={() => this.goBack(0)}>Game Start</button>
            </li>
            {this.props.test.map((item, index) => {
              return (
                <li>
                  <button onClick={() => this.goBack(index + 1)}>{item}</button>
                </li>
              );
            })}
          </ol>
        </div>
      </>
    );
  }
}

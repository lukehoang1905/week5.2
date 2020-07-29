import React, { Component } from "react";
//know id, know function to call, display result
//not perform any function
export default class Square extends Component {
  //to send value to parent
  render() {
    return (
      <div
        className="square"
        onClick={() => this.props.selectSquare(this.props.id)}
      >
        {this.props.value}
      </div>
    );
  }
}

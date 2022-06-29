import React, { Component } from "react";

export default class Jobs extends Component {
  render() {
    return (
      <div>
        Jobs
        <button onClick={this.props.mudaHome}>Home</button>
      </div>
    );
  }
}

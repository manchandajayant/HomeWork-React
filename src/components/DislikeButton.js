import React, { Component } from "react";

export default class Dislike extends Component {
  render() {
    return (
      <div>
        <div>{this.props.nemLikes}</div>
      </div>
    );
  }
}

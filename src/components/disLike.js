import React, { Component } from "react";

export default class Dislike extends Component {
  state = {
    nemLikes: 0
  };
  decrement = () => {
    this.setState({
      nemLikes: this.state.nmLikes + 1
    });
  };
  render() {
    return;
  }
}

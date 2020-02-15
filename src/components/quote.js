import React, { Component } from "react";
import propTypes from "prop-types";

export default class Quote extends Component {
  state = { like: 0, dislikes: 0 };
  static propTypes = {
    quoteText: propTypes.string.isRequired,
    quoteAuthor: propTypes.string.isRequired
  };

  // increment = () => {
  //   this.setState({
  //     likes: this.state.likes + 1
  //   });
  //   console.log("wasClicked");
  // };
  // decrement = () => {
  //   this.setState({
  //     dislikes: this.state.dislikes + 1
  //   });
  // };

  render() {
    return (
      <div>
        <p>{this.props.quoteText}</p>
        <p>By:{this.props.quoteAuthor}</p>
        <button onClick={() => this.props.updateLike(this.props.quoteId)}>
          Like
        </button>
        <button onClick={this.decrement}>Dislike</button>
      </div>
    );
  }
}

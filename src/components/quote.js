import React, { Component } from "react";
import propTypes from "prop-types";

export default class Quote extends Component {
  static propTypes = {
    quoteText: propTypes.string.isRequired,
    quoteAuthor: propTypes.string.isRequired
  };

  render() {
    return (
      <div>
        <p>{this.props.quoteText}</p>
        <p>By:{this.props.quoteAuthor}</p>
        <button onClick={() => this.props.updateLike(this.props.quoteId)}>
          Like
        </button>
        <button onClick={() => this.props.updateDislike(this.props.quoteId)}>
          Dislike
        </button>
      </div>
    );
  }
}

import React, { Component } from "react";

import "./quote.css";

export default class Quote extends Component {
  state = {
    isClicked: false,
    isClickedDislike: false
  };
  changeColor = () => {
    this.setState({ isClicked: true });
  };
  changeColorDislikes = () => {
    this.setState({ isClickedDislike: true });
  };
  likeProp = () => {
    this.props.updateLike(this.props.quoteId);
    this.changeColor();
  };

  dislikeProp = () => {
    this.props.updateDislike(this.props.quoteId);
    this.changeColorDislikes();
  };

  render() {
    const btn = {
      color: ""
    };
    console.log("new", this.state.isClicked);
    if (this.state.isClicked) {
      btn.color = "green";
    } else if (this.state.isClickedDislike) {
      btn.color = "red";
    }
    return (
      <div>
        <p style={btn}>{this.props.quoteText}</p>
        <p>By:{this.props.quoteAuthor}</p>
        <button onClick={this.likeProp}>Like</button>
        <button onClick={this.dislikeProp}>Dislike</button>
      </div>
    );
  }
}

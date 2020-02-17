import React, { Component } from "react";

import "./quote.css";

export default class Quote extends Component {
  state = {
    isClicked: false
  };
  changeColor = () => {
    this.setState({ isClicked: true });
  };
  likeProp = () => {
    this.props.updateLike(this.props.quoteId);
    this.changeColor();
  };

  dislikeProp = () => {
    this.props.updateDislike(this.props.quoteId);
    this.changeColor();
  };

  render() {
    const btn = {
      color: ""
    };
    console.log("new", this.state.isClicked);
    if (this.state.isClicked) {
      btn.color = "green";
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

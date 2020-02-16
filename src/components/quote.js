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
    console.log("new", this.state.isClicked);
    return (
      <div>
        <p className={this.isClicked ? "but" : ""}>{this.props.quoteText}</p>
        <p>By:{this.props.quoteAuthor}</p>
        <button onClick={this.likeProp}>Like</button>
        <button onClick={this.dislikeProp}>Dislike</button>
      </div>
    );
  }
}

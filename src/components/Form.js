import React, { Component } from "react";
import PropTypes from "prop-types";

export default class Search extends Component {
  handleSubmit = event => {
    event.preventDefault();
  };

  render() {
    console.log(this.state);
    return (
      <div>
        <p>Search:</p>
        <input type="text" onChange={this.handleChange} name="search" />

        <input type="submit" value="Search" />
      </div>
    );
  }
}

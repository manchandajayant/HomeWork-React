import React, { Component } from "react";
import PropTypes from "prop-types";

export default class Search extends Component {
  // static PropTypes = {
  //   search: PropTypes.func.isRequired
  // };

  render() {
    return (
      <div>
        <form>
          <label>
            Search:
            <input type="text" search="search" />
          </label>
          <input type="submit" value="Search" />
        </form>
      </div>
    );
  }
}

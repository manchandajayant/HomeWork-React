import React, { Component } from "react";
import Quote from "./quote";

export default class QuoteSearcher extends Component {
  state = {
    quotes: null,
    totalLikes: [],
    totalDislikes: 0
  };

  componentDidMount() {
    fetch("https://quote-garden.herokuapp.com/quotes/search/tree")
      .then(res => res.json())
      .then(data => {
        const quotesFetched = data.results.map(quoteDestructered => ({
          quoteText: quoteDestructered.quoteText,
          quoteAuthor: quoteDestructered.quoteAuthor,
          quoteId: quoteDestructered._id,
          likes: 0,
          dislikes: 0
        }));
        // const liks = Likes.map(likes => ({
        //   numLikes: likes.numLikes
        // }));
        // this.increment(liks);
        this.fetchUpdate(quotesFetched);
        console.log(quotesFetched);
      });
  }

  fetchUpdate(quotesFetched) {
    this.setState({
      quotes: quotesFetched
    });
  }

  updateLike = id => {
    const arr = this.state.quotes.filter(quote => quote.quoteId === id);
    // console.log(arr);
    // this.setState({
    //   [arr[0].quoteId]: quotes[arr[0].quoteId] + 1
    // });
    // console.log(arr[0].quoteId);
    // console.log(this.state.quotes[0].likes);
  };

  render() {
    if (this.state.quotes === null && "Loading...") {
      return (
        <div>
          <h1>Quotations for y'all</h1>
          <p>"Loading..."</p>
        </div>
      );
    } else {
      return (
        <div>
          <h1>Quotations for y'all</h1>
          <div>
            Like Counter:{this.state.numLikes}/Dislike Counter:
            {this.state.numDislikes}
          </div>
          <p>
            {this.state.quotes.map((renderNewState, index) => (
              <Quote
                quoteText={renderNewState.quoteText}
                quoteAuthor={renderNewState.quoteAuthor}
                key={index}
                updateLike={this.updateLike}
                quoteId={renderNewState.quoteId}
              />
            ))}
          </p>
        </div>
      );
    }
  }
}

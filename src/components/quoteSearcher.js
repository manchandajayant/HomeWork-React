import React, { Component } from "react";
import Quote from "./quote";

export default class QuoteSearcher extends Component {
  state = {
    quotes: []
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

        this.fetchUpdate(quotesFetched);
        //console.log(quotesFetched);
      });
  }

  fetchUpdate(quotesFetched) {
    this.setState({
      quotes: quotesFetched
    });
  }

  updateLike = id => {
    this.setState({
      quotes: this.state.quotes.map(quote =>
        quote.quoteId === id ? { ...quote, likes: quote.likes + 1 } : quote
      )
    });
    console.log(this.state.quotes);
  };
  updateDislike = id => {
    this.setState({
      quotes: this.state.quotes.map(quote =>
        quote.quoteId === id
          ? { ...quote, dislikes: quote.dislikes + 1 }
          : quote
      )
    });
    //console.log(this.state.quotes[0].dislikes);
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
            Like Counter:{this.state.quotes.likes} / Dislike Counter:
            {this.state.quotes.dislikes}
          </div>
          <p>
            {this.state.quotes.map((renderNewState, index) => (
              <Quote
                quoteText={renderNewState.quoteText}
                quoteAuthor={renderNewState.quoteAuthor}
                key={index}
                quoteId={renderNewState.quoteId}
                updateLike={this.updateLike}
                updateDislike={this.updateDislike}
              />
            ))}
          </p>
        </div>
      );
    }
  }
}

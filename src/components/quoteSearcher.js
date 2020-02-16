import React, { Component } from "react";
import Quote from "./quote";

export default class QuoteSearcher extends Component {
  state = {
    quotes: []
  };

  //Fetching Data
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
        console.log(quotesFetched);
      });
  }
  //Updating Quotes with Fetched Data
  fetchUpdate(quotesFetched) {
    this.setState({
      quotes: quotesFetched
    });
  }

  //Updating the User like as per Quote Id
  updateLike = id => {
    this.setState({
      quotes: this.state.quotes.map(quote =>
        quote.quoteId === id ? { ...quote, likes: quote.likes + 1 } : quote
      )
    });
    console.log(this.state.quotes);
  };
  //Updating the user dislike as per Quote Id
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

  //Counting the Number of likes bieng clicked
  likeness = () => {
    const arr = this.state.quotes.map(lk => lk.likes);
    const y = arr.reduce((accumulator, currentvalue) => {
      return accumulator + currentvalue;
    }, 0);
    return y;
  };
  //counting the Number of dislikes being clicked
  disLikeness = () => {
    const arr = this.state.quotes.map(lk => lk.dislikes);
    const x = arr.reduce((accumulator, currentvalue) => {
      return accumulator + currentvalue;
    }, 0);
    return x;
  };

  //rendering data
  render() {
    console.log("Total no. of likes", this.likeness());
    console.log("Total no. of dislikes", this.disLikeness());
    //if data is being fetched, shows loading
    if (this.state.quotes === []) {
      return (
        <div>
          <h1>Quotations for y'all</h1>
          <p>"Loading..."</p>
        </div>
      );
      //else returning the fetched data
    } else {
      return (
        <div>
          <h1>Quotations for y'all</h1>
          <div>
            Like Counter: {this.likeness()} / Dislike Counter:
            {this.disLikeness()}
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

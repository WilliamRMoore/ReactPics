import React from "react";

class SearchBar extends React.Component {
  state = { term: "", placeHoldr: "Please enter a query" };

  onFormSubmit = event => {
    event.preventDefault();
    this.props.onSubmit(this.state.term);
    //console.log(this.state.term);
  };

  render() {
    return (
      <div className="ui segment">
        <form onSubmit={this.onFormSubmit} className="ui form">
          <div className="field">
            <label>Image Search</label>
            <input
              type="text"
              value={this.state.term} //we want to have react state be the one source of truth.
              placeholder={this.state.placeHoldr}
              onChange={e => this.setState({ term: e.target.value })}
            />
          </div>
        </form>
      </div>
    );
  }
}

export default SearchBar;

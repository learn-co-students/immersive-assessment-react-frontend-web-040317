import React, { Component } from 'react'

class Search extends Component {
  constructor(props) {
    super();

    this.state = {
      searchTerm: ''
    }

    this.handleChange = this.handleChange.bind(this)
  }

  handleChange(e) {
    this.setState({searchTerm: e.target.value})
    this.props.handleChange(e.target.value)
  }

  render() {
    return (
      <div className="ui huge fluid icon input">
        <input
          type="text"
          placeholder={"Search your Recent Transactions"}
          value={this.state.searchTerm}
          onChange={this.handleChange}
          />
        <i className="circular search link icon"></i>
      </div>
    )
  }
}

export default Search

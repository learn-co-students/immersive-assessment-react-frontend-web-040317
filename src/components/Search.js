import React, {Component} from 'react'

export default class Search extends Component {
  render() {
    return (
    <div className="ui huge fluid icon input">
      <input onChange={this.props.handleChange}
        value={this.props.searchTerm}
        type="text"
        placeholder={"Search your Recent Transactions"}
      />
      <i className="circular search link icon"></i>
    </div>
    )
  }
}



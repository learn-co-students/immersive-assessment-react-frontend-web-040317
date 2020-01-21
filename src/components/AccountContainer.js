import React, { Component } from 'react'
import TransactionsList from './TransactionsList'
import Search from './Search'


class AccountContainer extends Component {

  constructor() {
    super()
    this.state = {
      store: [],
      transactions: [],
      searchQuery: ''}
  }


  componentDidMount() {
    fetch("https://boiling-brook-94902.herokuapp.com/transactions")
    .then(resp => resp.json())
    .then(results => this.setState({
      store: results,
      transactions: results
    }))
  }


  handleChange = (event) => {
    const { store, searchQuery } = this.state
    this.setSeachQuery(event)

    const searchResults = store.filter(transaction => transaction.category.toLowerCase().includes(searchQuery) || transaction.description.toLowerCase().includes(searchQuery))
    this.setState({transactions: searchResults})
  }

  setSeachQuery = (event) => {
    this.setState({searchQuery: event.target.value.toLowerCase()})
  }

  render() {
    return (
      <div>
        <Search handleChange={this.handleChange}/>
        <TransactionsList transactions={this.state.transactions}/>
      </div>
    )
  }
}

export default AccountContainer

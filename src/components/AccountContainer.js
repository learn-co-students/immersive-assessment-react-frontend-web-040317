import React, { Component } from 'react'
import TransactionsList from './TransactionsList'
import Search from './Search'
const url = 'https://boiling-brook-94902.herokuapp.com/transactions'

class AccountContainer extends Component {

  constructor() {
    super()

    this.state = {
      searchTerm: '',
      transactions: []
    }

    this.handleChange = this.handleChange.bind(this)
  }

  componentDidMount() {
    fetch(url)
      .then(resp => resp.json())
      .then(transactions => this.setState({ transactions }))
  }

  handleChange(searchTerm) {
    this.setState({ searchTerm })
  }

  render() {

    return (
      <div>
        <Search searchTerm={ this.state.searchTerm } handleChange={ this.handleChange } />
        <TransactionsList transactions={ this.state.transactions } searchTerm={ this.state.searchTerm } />
      </div>
    )
  }
}

export default AccountContainer

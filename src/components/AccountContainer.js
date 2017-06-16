import React, { Component } from 'react'
import TransactionsList from './TransactionsList'
import Search from './Search'
import {fetchTransactions} from '../api/index.js'

class AccountContainer extends Component {

  constructor() {
    super()

    // we have provided this default state for you,
    // use this to get the functionality working
    // and then replace the default transactions with a call to the API

    this.state = {
      searchTerm: '',
      transactions: []
    }
  }

  componentDidMount(){
    fetchTransactions()
    .then(transactions => this.setState({
      transactions: transactions
    }) )
  }

  handleChange(event) {
    this.setState({
      searchTerm: event.target.value
    })
  }

  render() {

    return (
      <div>
        <Search searchTerm={this.state.searchTerm} handleChange={this.handleChange.bind(this)} />
        <TransactionsList transactions={this.state.transactions} searchTerm={this.state.searchTerm} />
      </div>
    )
  }
}

export default AccountContainer

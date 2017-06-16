import React, { Component } from 'react'
import TransactionsList from './TransactionsList'
import Search from './Search'

class AccountContainer extends Component {

  constructor() {
    super()

    this.state = {
      searchTerm: '',
      transactions: []
    }
    this.fetchTransactions = this.fetchTransactions.bind(this)
  }

  componentDidMount() {
    this.fetchTransactions()
  }

  fetchTransactions() {
      fetch('https://boiling-brook-94902.herokuapp.com/transactions')
        .then( res => res.json() )
        .then( data => this.setState({ transactions: data}) )
  }

  handleChange(event) {
    let searchTerm = event.target.value
    this.setState({ searchTerm })
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

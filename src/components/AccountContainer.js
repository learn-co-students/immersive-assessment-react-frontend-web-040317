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
    this.handleChange = this.handleChange.bind(this)
  }

  handleChange(event) {
    this.setState({
      searchTerm: event.target.value.toLowerCase()
    })
  }

  componentDidMount() {
    this.fetchTransactions()
  }

  fetchTransactions(){
    fetch("https://boiling-brook-94902.herokuapp.com/transactions")
      .then(response => response.json() )
      .then(data => this.setState ({
        transactions: data
      }))
  }

  render() {

    return (
      <div>
        <Search searchTerm={this.state.searchTerm} handleChange={this.handleChange} />
        <TransactionsList transactions={this.state.transactions} searchTerm={this.state.searchTerm} />
      </div>
    )
  }
}

export default AccountContainer

import React, { Component } from 'react'
import TransactionsList from './TransactionsList'
import Search from './Search'

class AccountContainer extends Component {

  constructor() {
    super()

    // we have provided this default state for you,
    // use this to get the functionality working
    // and then replace the default transactions with a call to the API

    this.state = {
      searchTerm: '',
      filteredTransactions: [],
      transactions: []
    }
    this.getTransactions = this.getTransactions.bind(this)
    this.handleChange = this.handleChange.bind(this)
  }

  getTransactions() {
    return fetch('https://boiling-brook-94902.herokuapp.com/transactions')
      .then(res => res.json())
      .then(transactions => this.setState({
        transactions: transactions,
        filteredTransactions: transactions
      }))
  }

  componentDidMount() {
    this.getTransactions()
    
  }

  handleChange(event) {
    event.preventDefault()
    this.setState({
      searchTerm: event.target.value
    })
    let filtered = this.state.transactions.filter(transaction => {
      if (transaction.description.includes(event.target.value)) {
        return transaction
      }
      if (transaction.category.includes(event.target.value)) {
        return transaction
      } 
      return false
    })
    this.setState(() => {return {filteredTransactions: filtered}})
  }

  render() {

    return (
      <div>
        <Search searchTerm={this.state.searchTerm} handleChange={this.handleChange} />
        <TransactionsList transactions={this.state.filteredTransactions} searchTerm={this.state.searchTerm} />
      </div>
    )
  }
}

export default AccountContainer

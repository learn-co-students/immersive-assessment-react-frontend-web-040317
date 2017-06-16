import React, { Component } from 'react'
import TransactionsList from './TransactionsList'
import Search from './Search'

class AccountContainer extends Component {

  constructor() {
    super()
    this.handleChange = this.handleChange.bind(this)

    // we have provided this default state for you,
    // use this to get the functionality working
    // and then replace the default transactions with a call to the API

    this.state = {
      searchTerm: '',
      transactions: []
    }
  }

  componentDidMount() {
    const URL = "https://boiling-brook-94902.herokuapp.com/transactions"
    fetch(URL).then(res => res.json()).then(transactions => this.setState({transactions}))
  }

  searchTransactions(term) {
   this.setState({
     transactions: this.state.transactions.filter(transaction => transaction.category.includes(term) || transaction.description.includes(term))
   })
 }

  handleChange(event) {
    this.setState({
      searchTerm: event.target.value
    }, ()=> console.log(this.state))
    this.searchTransactions(this.state.searchTerm)
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

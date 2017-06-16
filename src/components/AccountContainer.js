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
      transactions: []
    }
    this.handleChange = this.handleChange.bind(this)
  }

  handleChange(event) {
    let searchTerm = event.target.value
    this.setState({
      searchTerm
    })
  }

  componentDidMount(){
    fetch("https://boiling-brook-94902.herokuapp.com/transactions")
    .then((resp) => resp.json())
    .then((transactions) => {
      this.setState({
        transactions
      })
    })
  }

  render() {

    return (
      <div>
        <Search searchTerm={this.state.searchTerm} handleChange={(text) => this.handleChange(text)} />
        <TransactionsList transactions={this.state.transactions} searchTerm={this.state.searchTerm} />
      </div>
    )
  }
}

export default AccountContainer

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
    this.fetchTransactions = this.fetchTransactions.bind(this)
    this.handleChange = this.handleChange.bind(this)
    this.filterTransactions = this.filterTransactions.bind(this)
  }

  componentDidMount(){
    this.fetchTransactions()
  }

  fetchTransactions(){
    fetch('https://boiling-brook-94902.herokuapp.com/transactions')
      .then( res => res.json() )
      .then( data => this.setState({ transactions: data}) )
  }

  handleChange(event) {
    this.setState( {searchTerm: event.target.value})
    // this.termCheck()
    this.filterTransactions(this.state.searchTerm)
  }

  filterTransactions(searchTerm){
    let filteredTrans = this.state.transactions.filter( (trans) =>
      trans.category.toLowerCase().includes(searchTerm.toLowerCase()) )
    this.setState({
      transactions: filteredTrans
    })

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

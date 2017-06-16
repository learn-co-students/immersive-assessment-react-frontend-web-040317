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
  }
    componentDidMount () {
      let parseJson = function (response) { return response.json();
      };

      fetch('https://boiling-brook-94902.herokuapp.com/transactions',{
        method: 'GET',
        headers: {'Accept': 'application/json'}})
      .then(parseJson)
      .then( (response)=> this.setState(
      {
        transactions: response
      }
    )
  )
}

    handleChange(event) {
      let searchTerm = event.target.value

      this.setState({
        searchTerm,
        transactions: this.state.transactions.filter(
          (transaction) =>
          transaction.description.includes(searchTerm)
          ||
          transaction.category.includes(searchTerm)
        )
      }
      )
    }

    render() {

      return (
        <div>
          <Search searchTerm={this.state.searchTerm} handleChange={ (event) =>  this.handleChange(event)} />
          <TransactionsList transactions={this.state.transactions} searchTerm={this.state.searchTerm} />
        </div>
      )
    }
  }

  export default AccountContainer

import React, { Component } from 'react'
import TransactionsList from './TransactionsList'
import Search from './Search'
import { BankAdaptor } from '../adaptors/index'

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
    BankAdaptor.all().then(res => this.setState({transactions: res}))
  }

  handleChange(event) {
    this.setState({searchTerm: event.target.value})
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




// {
//   id: 1,
//   posted_at: "2017-02-28 11:00:00",
//   description: "Leather Pants, Gap co.",
//   category: "Fashion",
//   amount: -20000
// },
// {
//   id: 2,
//   posted_at: "2017-02-29 10:30:00",
//   description: "Paycheck from Bob's Burgers",
//   category: "Income",
//   amount: 100000
// },
// {
//   id: 3,
//   posted_at: "2017-05-24 10:53:00",
//   description: "'Pair Programming Illuminated' by Laurie Williams and Robert Kessler",
//   category: "Book",
//   amount: 1498
// },
// {
//   id: 4,
//   posted_at: "2017-05-24 08:52:00",
//   description: "Medium Iced Cold Brew, Gregory's Coffee",
//   category: "Coffee",
//   amount: 365
// }

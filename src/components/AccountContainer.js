import React, { Component } from 'react'
import TransactionsList from './TransactionsList'
import Search from './Search'

class AccountContainer extends Component {

  constructor(props) {
    super(props)

    // we have provided this default state for you,
    // use this to get the functionality working
    // and then replace the default transactions with a call to the API
    const url = 'https://boiling-brook-94902.herokuapp.com/transactions'


    this.state = {
      searchTerm: '',
      transactions: [
        {
          id: 1,
          posted_at: "2017-02-28 11:00:00",
          description: "Leather Pants, Gap co.",
          category: "Fashion",
          amount: -20000
        },
        {
          id: 2,
          posted_at: "2017-02-29 10:30:00",
          description: "Paycheck from Bob's Burgers",
          category: "Income",
          amount: 100000
        },
        {
          id: 3,
          posted_at: "2017-05-24 10:53:00",
          description: "'Pair Programming Illuminated' by Laurie Williams and Robert Kessler",
          category: "Book",
          amount: 1498
        },
        {
          id: 4,
          posted_at: "2017-05-24 08:52:00",
          description: "Medium Iced Cold Brew, Gregory's Coffee",
          category: "Coffee",
          amount: 365
        }
      ]
    }
    const data = this.getsData(url)
  }


  getsData(url) {
    fetch(url, {
      method: "GET",
      headers: {
        "Content-Type": "application/json"}
    })
    .then(res => res.toJSON)
    .then(res => console.log(res))
  }


  handleChange(event) {
    // your code here
  }

  render() {

    return (
      <div>
        <Search searchTerm={this.state.searchTerm} handleChange={"...add code here..."} />
        <TransactionsList getsData={this.getsData} searchTerm={this.state.searchTerm} />
      </div>
    )
  }
}

export default AccountContainer

import React, { Component } from 'react'
import TransactionsList from './TransactionsList'
import Search from './Search'

class AccountContainer extends Component {

  constructor() {
    super()
    this.state = {
      transactions: [],
      searchTerm: ''
    }
    this.handleChange = this.handleChange.bind(this)
  }

  componentDidMount(){
  fetch('https://boiling-brook-94902.herokuapp.com/transactions')
    .then( res => res.json() )
    .then( data => this.setState({ transactions: data}) )
}

handleChange(event){
  const ans = []
  const arr = this.state.transactions
  const st = event.target.value
  if (st.length > 0){
  for (var i in arr){
    if (arr[i].category.indexOf(st) > -1 || arr[i].description.indexOf(st) > -1){
    ans.push(arr[i])
    }
  }
  this.setState({
    searchTerm: event.target.value,
    transactions: ans
  })
}else{
  this.setState({
    transactions: this.state.transactions
  })
}
}



  render() {

    return (
      <div>
        <Search searchTerm={this.state.searchTerm} handleChange={this.handleChange} />
        <TransactionsList transactions={this.state.transactions} searchTerm={this.state.searchTerm} filt={this.filterSearch} />
      </div>
    )
  }
}

export default AccountContainer

import React, { Component } from 'react'

export default class Search extends Component {
  constructor(){
    super()
    this.state = {

    }
  }



  render(){
    return (
      <div className="ui huge fluid icon input">
        <input
          type="text"
          placeholder={"Search your Recent Transactions"}
        />

        <i className="circular search link icon"></i>
      </div>
    )
  }

}

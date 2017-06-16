import React, { Component } from 'react'
import AccountContainer from './AccountContainer'

import '../stylesheets/App.css'

class App extends Component {
  render() {
    return (
      <div className="ui raised segment">
        <div className="ui segment orange inverted">
          <i className="em em-moneybag"></i><h2>The Royal Bank of Andrea "Money Bags" Graham</h2>
          <i className="em em-moneybag"></i>
        </div>

        <AccountContainer />

      </div>
    )
  }
}

export default App

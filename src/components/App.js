import React, { Component } from 'react'
import AccountContainer from './AccountContainer'

import '../stylesheets/App.css'

class App extends Component {
  render() {
    return (
      <div className="ui raised segment">
        <div className="ui segment" id="header">
          <h1>The Royal Bank of Flatiron</h1>
          <i className="money icon"></i><i className="money icon"></i><i className="money icon"></i><i className="money icon"></i><i className="money icon"></i>
        </div>

        <AccountContainer />

      </div>
    )
  }
}

export default App

import React, { Component } from 'react'
import AccountContainer from './AccountContainer'

import '../stylesheets/App.css'

class App extends Component {
  render() {
    return (
      <div className="ui raised segment">
        <div className="ui segment green inverted">
          <h2>ISAAC RULES</h2>
        </div>

        <AccountContainer />

      </div>
    )
  }
}

export default App

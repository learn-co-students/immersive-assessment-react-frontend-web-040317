import React, { Component } from 'react'
import AccountContainer from './AccountContainer'

import '../stylesheets/App.css'

class App extends Component {
  render() {
    return (
      <div className="ui raised segment">
        <div className="ui segment violet inverted">
          <h2>Flatiron Broke My Bank</h2>
        </div>

        <AccountContainer />

      </div>
    )
  }
}

export default App

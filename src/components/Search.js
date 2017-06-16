import React from 'react'

export default class Search extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      searchTerm: ""
    }
  }

  onInputChange(term){
    this.setState({
      searchTerm: term
    }, () => this.props.handleChange(this.state.searchTerm))
  }

  render(){
    return(
       <div className="ui huge fluid icon input">
      <input
        type="text"
        value={this.state.searchTerm}
        onChange={event => this.onInputChange(event.target.value)}
        placeholder={"Search your Recent Transactions"}
      />
      <i className="circular search link icon"></i>
    </div>
    
    )
  }

 
}


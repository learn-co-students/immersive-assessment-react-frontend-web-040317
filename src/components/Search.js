import React from 'react'

const Search = (props) => {
  return (
    <div className="ui huge fluid icon input">
      <input
        type="text"
        placeholder={"Search your Recent Transactions"}


        onChange={ (event) => props.handleChange(event)}/>
      <i className="circular search link icon"></i>
    </div>
  )
}

export default Search

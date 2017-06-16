import React from 'react'

const Search = ({searchTerm, handleChange}) => {
  return (
    <div className="ui huge fluid icon input">
      <input
        type="text"
        placeholder={"Search your Recent Transactions"} value={searchTerm}
        onChange={handleChange}
      />
      <i className="circular search link icon"></i>
    </div>
  )
}

export default Search

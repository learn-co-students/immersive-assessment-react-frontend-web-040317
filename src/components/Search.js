import React from 'react'

const Search = (props) => {
  function onChange(event){
    props.handleChange(event)
  }
  return (
    <div className="ui huge fluid icon input">
      <input
        type="text"
        placeholder={"Search your Recent Transactions"}
        onChange={onChange}
      />
      <i className="circular search link icon"></i>
    </div>
  )
}

export default Search

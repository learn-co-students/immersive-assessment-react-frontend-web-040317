import React from 'react'

// const searchTerm=_.debounce((term) =>
//   {this.searchTerm(term)}, 300);

// tried to use lodash and debounce to throttle search results, but failed miserably.
// really wanted to use throttled searches so the rendered results wouldn't have such
// a jarring effect to the user. Oh well. tried my best.
// Here's to hoping that I'll figure it out on my project!

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

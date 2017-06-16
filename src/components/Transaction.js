import React from 'react'

const Transaction = (props) => {
  if (props.searchTerm !== ''){
    if (props.transaction.description.includes(props.searchTerm) ||
      props.transaction.category.includes(props.searchTerm)) {
        return (
          <tr>
            <td>{props.transaction.posted_at}</td>
            <td>{props.transaction.description}</td>
            <td>{props.transaction.category}</td>
            <td>{props.transaction.amount}</td>
          </tr>
        )
      } else {
        return null
      }
  }
  return (
    <tr>
      <td>{props.transaction.posted_at}</td>
      <td>{props.transaction.description}</td>
      <td>{props.transaction.category}</td>
      <td>{props.transaction.amount}</td>
    </tr>
  )
}

export default Transaction

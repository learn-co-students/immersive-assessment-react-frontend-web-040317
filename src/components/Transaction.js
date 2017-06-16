import React from 'react'

const Transaction = (props) => {
  return (
    <tr >
      <td>{props.details.posted_at}</td>
      <td>{props.details.description}</td>
      <td>{props.details.category}</td>
      <td>{props.details.amount}</td>
    </tr>
  )
}

export default Transaction

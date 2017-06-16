import React from 'react'

const Transaction = (props) => {
  return (
    <tr>
      <td>{props.postedAt}</td>
      <td>{props.description}</td>
      <td>{props.category}</td>
      <td>{props.amount}</td>
    </tr>
  )
}

export default Transaction

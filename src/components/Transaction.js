import React from 'react'

const Transaction = (props) => {

  let dateConvert = new Date(props.transaction.posted_at).toLocaleString()

  return (
    <tr>
      <td>{dateConvert}</td>
      <td>{props.transaction.description}</td>
      <td>{props.transaction.category}</td>
      <td>{props.transaction.amount}</td>
    </tr>
  )
}

export default Transaction

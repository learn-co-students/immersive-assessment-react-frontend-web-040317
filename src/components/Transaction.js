import React from 'react'

const Transaction = (props) => {
  return (
    <tr>
      <td>{props.eachTrans.posted_at}</td>
      <td>{props.eachTrans.description}</td>
      <td>{props.eachTrans.category}</td>
      <td>{props.eachTrans.amount}</td>
    </tr>
  )
}

export default Transaction

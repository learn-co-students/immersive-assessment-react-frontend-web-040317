import React from 'react'

const Transaction = (props) => {
  const transaction = props.transaction
  return (
    <tr key={transaction.id}>
      <td>{transaction.posted_at}</td>
      <td>{transaction.description}</td>
      <td>{transaction.category}</td>
      <td>{`$${(transaction.amount/100).toFixed(2)}`}</td>
    </tr>
  )
}

export default Transaction

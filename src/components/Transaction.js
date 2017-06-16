import React from 'react'


const Transaction = (tx, i) => {
  return (
    <tr key={i}>
      <td>{tx.transaction.posted_at}</td>
      <td>{tx.transaction.description}</td>
      <td>{tx.transaction.category}</td>
      <td>{tx.transaction.amount}</td>
    </tr>
  )
}

export default Transaction

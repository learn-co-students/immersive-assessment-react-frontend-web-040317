import React from 'react'

const Transaction = (props) => {

  var options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric', hour: '2-digit', minute: "2-digit" };
  let dateConvert = new Date(props.transaction.posted_at).toLocaleString('en-US', options) //Cleaned up the date/time

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

import React from 'react'


const Transaction = (props) => {

  let options = { weekday: 'short', year: 'numeric', month: '2-digit', day: '2-digit', hour: '2-digit', minute: "2-digit" };
  let dateConvert = new Date(props.transaction.posted_at).toLocaleString('en-US', options)
  let cashConvert = props.transaction.amount.toLocaleString()
    //Cleaned up the posted_at/amount, (all transactions happen at same time of day in API data)

  return (
    <tr>
      <td>{dateConvert}</td>
      <td>{props.transaction.description}</td>
      <td>{props.transaction.category}</td>
      <td>${cashConvert}</td>
    </tr>
  )
}

export default Transaction

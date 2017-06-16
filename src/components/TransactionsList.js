import React from 'react'
import Transaction from './Transaction'

const TransactionsList = (props) => {

  var transactionItems = []
  var lowercaseTerm = props.searchTerm.toLowerCase()

  if (props.searchTerm === '') {
    transactionItems = props.transactions

  } else {

    transactionItems = props.transactions.filter((transaction) => transaction.description.toLowerCase().includes(lowercaseTerm) === true || transaction.category.toLowerCase().includes(lowercaseTerm) === true)
  }

  const listItems = transactionItems.map((transaction) => {
    return (
      <Transaction key={transaction.id} transaction={transaction} />
    )
  })

  return (
    <table className="ui celled striped padded table">
      <tbody>
        <tr>
          <th>
            <h3 className="ui center aligned header">
              Posted At
            </h3>
          </th>
          <th>
            <h3 className="ui center aligned header">
              Description
            </h3>
          </th>
          <th>
            <h3 className="ui center aligned header">
              Category
            </h3>
          </th>
          <th>
            <h3 className="ui center aligned header">
              Amount
            </h3>
          </th>
        </tr>

        {listItems}

      </tbody>
    </table>
  )
}

export default TransactionsList

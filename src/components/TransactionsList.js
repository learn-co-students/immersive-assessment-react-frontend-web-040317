import React from 'react'
import Transaction from './Transaction'

const renderTableHeaders = () => {
  return(
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
  )
}

const renderTransactions = (props) => {
  return(
    props.transactions.filter(transaction => {
      return(
        transaction.description.toLowerCase().includes(props.searchTerm.toLowerCase()) ||
        transaction.category.toLowerCase().includes(props.searchTerm.toLowerCase())
      )
    })
      .map(transaction => {
        return(
          <Transaction key={transaction.id} transaction={transaction} />
        )
      })
  )
}

const TransactionsList = (props) => {
  return (
    <table className="ui celled striped padded table">
      <tbody>
        {renderTableHeaders(props)}
        {renderTransactions(props)}
      </tbody>
    </table>
  )
}

export default TransactionsList

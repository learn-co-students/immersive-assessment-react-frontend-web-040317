import React from 'react'
import { Link, Route } from 'react-router-dom'
import Transaction from './Transaction'

export default function TransactionsList(props) {

  return (
    <div>
      <p></p>
      <h2>Transaction List</h2>
      <table id="transactions-list" className="ui celled striped padded table">
        <tbody>
          <tr>
            <th>
              <h3 className="ui center aligned header">Posted At</h3>
            </th>
            <th>
              <h3 className="ui center aligned header">Description</h3>
            </th>
            <th>
              <h3 className="ui center aligned header">Category</h3>
            </th>
            <th>
              <h3 className="ui center aligned header">Amount</h3>
            </th>
          </tr>

          {props.transactions.map( transaction => {

               if (transaction.description.toLowerCase().match(props.searchTerm.toLowerCase()) ||
                    transaction.category.toLowerCase().match(props.searchTerm.toLowerCase())) {
                return (
                  <tr key={transaction.id}>
                    <td>{transaction.posted_at}</td>
                    <td>{transaction.description}</td>
                    <td>{transaction.category}</td>
                    <td>{transaction.amount}</td>
                  </tr>
                )

            }
          } )}

        </tbody>
      </table>
    </div>
  )
}

// to add at end
// <td><Link to={`/transactions/${transaction.id}`}>{transaction.posted_at}</Link></td>

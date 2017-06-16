import React from 'react'
import Transaction from './Transaction'


const TransactionsList = (props) => {

let filterList = props.transactions.filter((transaction)=> transaction.description.toLowerCase().includes(props.searchTerm) || transaction.category.toLowerCase().includes(props.searchTerm))

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
        
        {filterList.map((transaction) => <Transaction posted={transaction.posted_at} description={transaction.description} category={transaction.category} amount={transaction.amount} />) }

      </tbody>
    </table>
  )
}

export default TransactionsList

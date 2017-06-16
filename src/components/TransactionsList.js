import React from 'react'
import Transaction from './Transaction'

const TransactionsList = (props) => {

  return (
    <table className="ui celled striped padded table">
      <tbody>
        <tr>
          <th>
            <h3 className="ui center aligned header">
            {props.postedAt}
            </h3>
          </th>
          <th>
            <h3 className="ui center aligned header">
            {props.description}
            </h3>
          </th>
          <th>
            <h3 className="ui center aligned header">
            {props.category}
            </h3>
          </th>
          <th>
            <h3 className="ui center aligned header">
            {props.amount}
            </h3>
          </th>
        </tr>

        {"... your code here..."}

      </tbody>
    </table>
  )
}

export default TransactionsList

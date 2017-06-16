import React, {Component} from 'react'

export default class TransactionsList extends Component {
render() {
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

        {this.props.transactions.map(transaction => {
          return <tr key={transaction.id}><td>{transaction.posted_at}</td><td>{transaction.description}</td><td>{transaction.category}</td><td>{transaction.amount}</td></tr>
        })}

      </tbody>
    </table>
  )
}
  
}

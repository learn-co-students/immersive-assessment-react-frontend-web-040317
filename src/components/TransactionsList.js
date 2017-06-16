import React from 'react'


const TransactionsList = (props) => {


  const url = 'https://boiling-brook-94902.herokuapp.com/transactions'

  debugger
  return (
    <table className="ui celled striped padded table">
      <tbody>
        <tr>
          <th>
            <h3 className="ui center aligned header">
              Posted At {(url) => props.transactions.getsData(url)}
            </h3>
          </th>
          <th>
            <h3 className="ui center aligned header">
              Description {}
            </h3>
          </th>
          <th>
            <h3 className="ui center aligned header">
              Category  {}
            </h3>
          </th>
          <th>
            <h3 className="ui center aligned header">
              Amount  {}
            </h3>
          </th>
        </tr>

        {"... your code here..."}

      </tbody>
    </table>
  )
}

export default TransactionsList

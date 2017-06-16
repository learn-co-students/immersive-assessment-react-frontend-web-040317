import React from 'react'
import Transaction from './Transaction'

const TransactionsList = (props) => {
  const origList = props.transactions
  const filteredList = origList.filter(transaction => {
    let description = transaction.description.toLowerCase()
    let category = transaction.category.toLowerCase()
    let descriptionSearch = description.includes(props.searchTerm.toLowerCase())
    let categorySearch = category.includes(props.searchTerm.toLowerCase())
    if (categorySearch === true || descriptionSearch === true){
      return transaction
    }
  })

  const filteredResults = filteredList.map(transaction => < Transaction key={transaction.id} transaction={transaction} />)

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

        {filteredResults}

      </tbody>
    </table>
  )
}

export default TransactionsList

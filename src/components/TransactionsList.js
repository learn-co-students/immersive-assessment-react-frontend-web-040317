import React from 'react'

const TransactionsList = (props) => {
  
  let adList = null
  if (props.filtered.length > 0 ) {
    adList = props.filtered.map( (trans) =>  <tr key={trans.id}>
          <td>{trans.posted_at}</td>
          <td>{trans.description}</td> 
          <td>{trans.category}</td>
         <td>{trans.amount}</td>
       </tr>)
  } else {
    adList = props.transactions.map( (trans) =>  <tr key={trans.id}>
          <td>{trans.posted_at}</td>
          <td>{trans.description}</td> 
          <td>{trans.category}</td>
         <td>{trans.amount}</td>
       </tr>)
  }
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
      
       {adList}

      </tbody>
    </table>
  )
}

export default TransactionsList

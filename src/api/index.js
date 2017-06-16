export function fetchTransactions(){
  return fetch("https://boiling-brook-94902.herokuapp.com/transactions")
  .then(res => res.json())
}

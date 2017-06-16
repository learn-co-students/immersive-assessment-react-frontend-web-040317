export class TransactionsAdapter {
  static all(){
    return(
      fetch(`https://boiling-brook-94902.herokuapp.com/transactions`)
        .then(response => response.json())
    )
  }
}

const URL = 'https://boiling-brook-94902.herokuapp.com/transactions'

export default class TransactionsAdapter {

  static all(){
    return fetch(URL).then(r => r.json())
  }

}

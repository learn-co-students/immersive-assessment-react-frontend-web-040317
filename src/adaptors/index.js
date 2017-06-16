
export class BankAdaptor {

  static all() {
    return fetch('https://boiling-brook-94902.herokuapp.com/transactions')
      .then(res => res.json() )
  }



}

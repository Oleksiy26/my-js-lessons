class Wallet {
  constructor() {
    // если в конструктор ничего не приходит , можно его не писать
    this._balance = 0;
  }

  getBalance() {
    return this._balance;
  }

  deposit(amount) {
    this._balance += amount;
  }

  withdraw(amount) {
    if (amount > this._balance) {
      console.log('No enough funds');
      return;
    }
    this._balance -= amount;
  }
}

// новая разработка вместо   this._balance писать this.#balance - поддержка пока 63%

const wallet1 = new Wallet();

wallet1.deposit(45);
console.log(wallet1.getBalance());

wallet1.withdraw(40);
console.log(wallet1.getBalance());
wallet1.withdraw(40);
console.log(wallet1.getBalance());

class Order {
  constructor(price, city, type) {
    this.price = price;
    this.city = city;
    this.type = type;
    this.id = String(Math.floor(1 + Math.random() * (500 + 1 - 1)));
    this.dateCreated = new Date();
    this.isConfirmed = false;
  }

  checkPrice() {
    return this.price > 1000;
  }

  isValidType() {
    if (this.type === 'Buy' || this.type === 'Sell') {
      return true;
    }
    return false;
  }

  confirmOrder() {
    if (this.isConfirmed === false) {
      this.isConfirmed = true;
      this.dateConfirmed = new Date();
      this.dateCreated = this.dateConfirmed;
      return this;
    }
    return false;
  }
}

const order1 = new Order(3500, 'lviv', 'Buy');
console.log(order1);

console.log('type', order1.isValideType());
console.log('price', order1.checkPrice());
console.log(order1.confirmOrder());
console.log(order1);

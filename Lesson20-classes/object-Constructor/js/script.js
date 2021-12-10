class User {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  sayHi() {
    console.log(`Hi, I am ${this.name}`);
  }

  requestNewPhoto() {
    console.log(`New photo request was sent for ${this.name}`);
  }

  setAge(age) {
    if (age < 0) {
      return false;
    }
    this.age = age;
    if (age >= 25) {
      this.requestNewPhoto();
    }
    return age;
  }

  static createEmpty() {
    return new this('', null);
  }
}

const user1 = new User('John', 25);

console.log(user1.setAge(-1));
console.log(User.createEmpty());
console.log(new User());

// console.log(user1);

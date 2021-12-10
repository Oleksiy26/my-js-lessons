class User {
  constructor(id, name, sessionId) {
    this._id = id;
    this._name = name;
    this._sessionId = sessionId;
  }

  get id() {
    return this._id;
  }

  get name() {
    return this._name;
  }

  get sessionId() {
    return this._sessionId;
  }
}

class UserRepository extends User {
  constructor(users) {
    super();
    this._name = name;
    this._users = Object.freeze(users);
  }

  get users() {
    return this._users;
  }

  getUserNames() {
    return this._users.map(key => key._name);
  }

  getUserIds() {
    return this._users.map(key => key._id);
  }

  getUserNameById(id) {
    return this._users.find(key => key._id === id)._name;
  }
}

const user1 = new User('1', 'Tom', 'session-id');
const user2 = new User('2', 'Bob', 'session-id');
const user3 = new User('3', 'Bill', 'session-id');
const user4 = new User('4', 'John', 'session-id');
console.log(user1);
// получить свойства можем
console.log(user1.id); // ===> '1'
console.log(user1.name); // ===> 'Tom'
console.log(user1.sessionId); // ===> 'session-id'

user1.id = '34';

console.log(user1.id);

const userRep = new UserRepository([user1, user2, user3, user4]);
console.log(userRep);

console.log('user Names', userRep.getUserNames());
console.log('users ID', userRep.getUserIds());
console.log('name by id', userRep.getUserNameById('2'));

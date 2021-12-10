function defer(func, ms) {
  return function () {
    setTimeout(() => func.apply(this, arguments), ms);
  };
}
const user = {
  name: 'tome',
  sayHi() {
    console.log(`hisss ${this.name}`);
  },
};

const dff = defer(user.sayHi, 3000);

dff.call(user);

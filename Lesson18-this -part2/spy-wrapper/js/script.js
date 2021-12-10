function saveCalls(func) {
  const calls = [];
  return function withMemory() {
    calls.push([...arguments].map(elem => elem));
    withMemory.calls = calls;
    return func.apply(this, arguments);
  };
}

function test(a, b) {
  console.log(a + b);
}

const testWithMemory = saveCalls(test);
testWithMemory(4, 2);
testWithMemory(9, 2);
testWithMemory(15, 41);

console.log(testWithMemory.calls);

const user = {
  name: 'John',
  sayHi() {
    return this.name;
  },
};

const methodWithMemory = saveCalls(user.sayHi);
methodWithMemory.apply({ name: 'Tom' });
console.log(methodWithMemory.apply({ name: 'Tom' }));
console.log(methodWithMemory.calls);

// console.log(calls);
// console.log(withMemory(1, 2, 3));
// console.log(withMemory(2, 3));
// console.log(withMemory(4, 3));
// console.log(calls);
// console.log(withMemory());
// console.log(calls);

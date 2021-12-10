/* eslint-disable */

var foo = 1;

function bar() {
  if (!foo) {
    let foo = 10;
  }
  console.log('in', foo);
  return foo;
}
var foo = bar();
// export default { foo };

console.log(foo);

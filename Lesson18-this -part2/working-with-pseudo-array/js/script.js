// function sumOfSquares() {
//   return [].reduce.apply(arguments, [
//     (acc, value) => {
//       const res = acc + value ** 2;
//       return res;
//     },
//     0,
//   ]);
// }

// =---------------------updated------------

export function sumOfSquares() {
  return [...arguments].reduce((acc, value) => {
    const res = acc + value ** 2;
    return res;
  }, 0);
}
console.log(sumOfSquares(1, 2, 5));

let number;
function getEvenOdd(number) {
  const result = number % 2 === 0 ? 'even' : 'odd';
  return result;
}

const res = getEvenOdd(5);
console.log(res);

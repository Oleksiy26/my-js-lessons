const getTotalPrice = arr => {
  const arrSum = arr.reduce((result, value) => value + result);
  console.log(arrSum);
  const total = `$${Math.floor(arrSum * 100) / 100}`;
  return total;
};
const arr = [15.457, 28.451, 45.2341, 38.1243124124];
console.log(getTotalPrice(arr));

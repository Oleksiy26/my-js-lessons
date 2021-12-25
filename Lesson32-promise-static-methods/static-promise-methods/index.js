const getValueWithDealy = (value, delay) =>
  new Promise(resolve => {
    setTimeout(() => {
      resolve(value);
    });
  }, delay);

const asyncNumber1 = getValueWithDealy(35, 1000);
const asyncNumber2 = getValueWithDealy(undefined, 3000);
const asyncNumber3 = getValueWithDealy(35, 5000);
const getSum = numbers =>
  numbers.filter(value => !isNaN(value)).reduce((acc, number) => acc + number);

export const asyncSum = (...asyncNumbers) =>
  Promise.all(asyncNumbers)
    .then(numbers => getSum(numbers))
    .catch(() => Promise.reject(new Error("Can't calculate")));

// asyncSum(asyncNumber1, Promise.reject(new Error('err')), asyncNumber3).then(result =>
//   console.log(result),
// );

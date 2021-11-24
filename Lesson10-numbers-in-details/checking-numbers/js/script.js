const getFiniteNumbers = arr => {
  const result = arr.filter(element => Number.isFinite(element));
  return result;
};

const getFiniteNumbersV2 = arr => {
  const result = arr.filter(element => isFinite(element));
  return result;
};

const getNaN = arr => {
  const result = arr.filter(element => Number.isNaN(element));
  return result;
};
const getNaNV2 = arr => {
  const result = arr.filter(element => isNaN(element));
  return result;
};

const getIntegers = arr => {
  const result = arr.filter(element => Number.isInteger(element));
  return result;
};

const arr = [2, NaN, 15.5, 'five', undefined, true, 47];

console.log(getFiniteNumbers(arr));
console.log(getFiniteNumbersV2(arr));
console.log(getNaN(arr));
console.log(getNaNV2(arr));
console.log(getIntegers(arr));

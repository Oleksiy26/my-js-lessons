const getParsedIntegers = arr => {
  const result = arr.map(element => Number.parseInt(element, 10));
  return result;
};

const getParsedIntegersV2 = arr => {
  const result = arr.map(element => parseInt(element, 10));
  return result;
};
const getParsedFloats = arr => {
  const result = arr.map(element => Number.parseFloat(element));
  return result;
};
const getParsedFloatsV2 = arr => {
  const result = arr.map(element => parseFloat(element));
  return result;
};

const arr = [2, NaN, 15.5, 'five', undefined, true, 47];

console.log(getParsedIntegers(arr));
console.log(getParsedIntegersV2(arr));
console.log(getParsedFloats(arr));
console.log(getParsedFloatsV2(arr));

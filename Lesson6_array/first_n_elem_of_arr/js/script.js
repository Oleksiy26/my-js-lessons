const getSubArray = (arr, numberOfElements) => {
  const newArr = [];
  const subArr = arr;
  subArr.length = numberOfElements;
  for (let i = 0; i < numberOfElements; i += 1) {
    newArr.push(arr[i]);
  }
  return newArr;
};
let rez = getSubArray([11, 4, 8, 3], 2); // ==> [11, 4]
console.log(rez);

rez = getSubArray([1, 2, 3, 4, 5], 3); // ==> [1, 2, 3]
console.log(rez);

rez = getSubArray(['some string', 'hello', 'I am happy'], 1); // ==> ['some string']
console.log(rez);

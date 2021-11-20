const cloneArr = arr => {
  if (!Array.isArray(arr)) {
    return null;
  }
  return [...arr];
};

console.log(cloneArr([1, 4, 8, 3])); // ==> true)
// console.log(includes([1, 4, 8, 3], 5)); // ==> false);

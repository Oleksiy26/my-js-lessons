const sum = arr => {
  if (!Array.isArray(arr)) {
    return null;
  }
  const sumedElems = arr.reduce((priviosNum, currentNum) => priviosNum + currentNum);
  return sumedElems;
};

console.log(sum([1, 2, 3]));

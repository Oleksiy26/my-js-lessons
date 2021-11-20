const arrAverage = arr => {
  if (!Array.isArray(arr)) {
    return null;
  }
  console.log(arr.length);
  const sumedElems = arr.reduce((priviosNum, currentNum) => priviosNum + currentNum);
  return sumedElems / arr.length;
};

console.log(arrAverage([1, 2, 3]));

export const getMinSquaredNumber = arr => {
  if (!Array.isArray(arr) || arr.length === 0) {
    return null;
  }
  const squared = arr.map(num => num * num);
  const minSquared = Math.min.apply(null, squared);
  return minSquared;
};

// const result = getMinSquaredNumber([]);

console.log(getMinSquaredNumber([]));

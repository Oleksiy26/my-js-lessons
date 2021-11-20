function squareArray(arr) {
  if (!Array.isArray(arr)) {
    return null;
  }
  const flat = arr.reduce((priveous, current) => {
    return priveous.concat(current);
  }, []);
  return flat.map(elemn => elemn * elemn);
}

const arr = [1, 2, [2, 2], 3, [4, 4, 4]];

console.log(squareArray(arr));

const arr = [1, 3, 2];

const sortDesc = arr => {
  const sorted = arr.slice('');
  return sorted.sort((a, b) => b - a);
};

console.log(sortDesc(arr));
console.log(arr);

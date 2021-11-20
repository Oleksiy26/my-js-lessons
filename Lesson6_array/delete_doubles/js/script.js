function removeDuplicates(array) {
  if (!Array.isArray(array)) {
    return null;
  }
  const newArray = Array.from(new Set(array));
  return newArray;
}

console.log(removeDuplicates([1, 1, 2, 1, 2, 1, 3, 1, 3]));

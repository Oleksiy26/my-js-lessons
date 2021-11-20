function uniqueCount(arr) {
  if (!Array.isArray(arr)) {
    return null;
  }
  const unique = arr.filter((value, index) => {
    return arr.indexOf(value) === index;
  });
  return unique.length;
}

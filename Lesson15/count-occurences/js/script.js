const countOccurrences = (text, str) => {
  if (str.length === 0) {
    return null;
  }
  let count = 0;
  for (let i = 0; i < text.length; i += 1) {
    const entry = text.indexOf(str, i);
    if (entry !== -1) {
      i = entry;
      count += 1;
    }
  }

  return count;
};
const text = 'I play basketball as well as i can';
const str = 'll';
console.log(countOccurrences(text, str));

const splitText = (string, num) => {
  if (typeof string !== 'string') {
    return null;
  }
  if (typeof num === 'undefined') {
    num = 10;
  }

  const strArr = [];
  for (let i = 0; i < string.length; i += num) {
    const chunk = string.substr(i, num);
    if (chunk.length !== 0) {
      strArr.push(chunk[0].toUpperCase() + chunk.slice(1));
    }
  }
  return strArr.join('\n');
};

console.log(splitText('fdhflaksfjla'));

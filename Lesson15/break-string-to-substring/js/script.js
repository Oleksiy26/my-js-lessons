const splitString = (string, num) => {
  if (typeof string !== 'string') {
    return null;
  }
  if (typeof num === 'undefined') {
    num = 10;
  }

  const strArr = [];
  for (let i = 0; i < string.length; i += num) {
    const end = '.';
    const chunk = string.substr(i, num);
    if (chunk.length !== 0) {
      strArr.push(chunk);
    }
    const lastElem = strArr[strArr.length - 1];
    if (lastElem.length < num) {
      strArr[strArr.length - 1] = lastElem.concat(end.repeat(num - lastElem.length));
    }
  }
  return strArr;
};

console.log(splitString('fdhflaksfjla', 7));

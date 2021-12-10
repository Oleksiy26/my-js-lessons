export const createArrayOfFunctions = arrLength => {
  const arrOfFunc = [];

  if (typeof arrLength !== 'number' && typeof arrLength !== 'undefined') {
    return null;
  }
  if (arrLength === 'undefined') {
    return arrOfFunc;
  }

  for (let i = 0; i < arrLength; i += 1) {
    arrOfFunc[i] = function () {
      return i;
    };
  }
  return arrOfFunc;
};

console.log(createArrayOfFunctions('asfafwD'));

// var arr = [];

//

// export { arr };

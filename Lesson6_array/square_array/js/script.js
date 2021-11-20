// 1. перебрать массив
// 2. каждый елемент массива возвести в квадрат
// 3. вернуть новый массив не изменяя входной.

function squareArray(arr) {
  if (!Array.isArray(arr)) {
    return null;
  }
  const squared = arr.map(arrElem => arrElem * arrElem);
  console.log(squared);
  return squared;
}

squareArray([1, 10, 9, 11]); // ==> [1, 100, 81, 121]
squareArray([10, 0, -4]); // ==> [100, 0, 16]
squareArray([1]); // ==> [1]
squareArray(12345);

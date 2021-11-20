// 1. перебрать массив
// 2. каждый елемент проверить на четность
// 3. если четный увеличить на delta
// 4. если нет просто записать в новый массив
// 3. вернуть новый массив не изменяя входной.

const increaseEvenEl = (arr, delta) => {
  if (!Array.isArray(arr)) {
    return null;
  }
  const increasArr = [];
  for (let i = 0; i < arr.length; i += 1) {
    if (arr[i] % 2 === 0) {
      increasArr.push(arr[i] + +delta);
    } else {
      increasArr.push(arr[i]);
    }
  }
  return increasArr;
};

// examples
increaseEvenEl([2, 5, 6, 8, 11, 9, 4], 20); // ===> [22, 5, 26, 28, 11, 9, 24]
increaseEvenEl([7, 11, 1], 10); // ===> [7, 11, 1]
increaseEvenEl([], 120); // ===> []

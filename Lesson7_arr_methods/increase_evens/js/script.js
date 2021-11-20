// 1. перебрать массив
// 2. каждый елемент проверить на четность
// 3. если четный увеличить на delta
// 4. если нет просто вернуть элемент
// 3. вернуть новый массив не изменяя входной.

const increaseEvenEl = (arr, delta) => {
  if (!Array.isArray(arr)) {
    return null;
  }
  const increased = arr.map(elem => {
    if (elem % 2 !== 0) {
      return elem;
    }
    return elem + delta;
  });
  return increased;
};

// examples
console.log(increaseEvenEl([2, 5, 6, 8, 11, 9, 4], 20));

increaseEvenEl([2, 5, 6, 8, 11, 9, 4], 20); // ===> [22, 5, 26, 28, 11, 9, 24]
increaseEvenEl([7, 11, 1], 10); // ===> [7, 11, 1]
increaseEvenEl([], 120); // ===> []

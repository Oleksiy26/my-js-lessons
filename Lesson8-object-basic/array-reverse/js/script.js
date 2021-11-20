// 1. создаем клон входящего массива
// 2. используя метод массива разворачиваем его

const arr = [1, 2, 3];

const reverseArray = arr => {
  if (!Array.isArray(arr)) {
    return null;
  }
  const cloneArr = arr.slice('');
  const reversed = cloneArr.reverse();
  return reversed;
};

console.log(reverseArray(arr));
console.log(arr);

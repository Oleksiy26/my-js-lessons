// 1. перебрать массив
// 2. вставить елементы в обратном порядке в новый массив

function reverseArray(arr) {
  if (!Array.isArray(arr)) {
    return null;
  }
  const reversedArr = [];
  for (let i = 0; i < arr.length; i += 1) {
    reversedArr.unshift(arr[i]);
  }
  return reversedArr;
}

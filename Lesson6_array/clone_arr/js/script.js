// 1. перебрать входящий массив
// 2. создать пустой
// 3. полученные значения запушить в пустой

// function cloneArr(arr) {
//   if (!Array.isArray(arr)) {
//     return null;
//   }
//   const cloned = [];
//   for (let i = 0; i < arr.length; i += 1) {
//     cloned.push(arr[i]);
//   }
//   return cloned;
// }

// -------------------OR-------------------------------

function cloneArr(arr) {
  if (!Array.isArray(arr)) {
    return null;
  }
  const cloned = arr.slice('');
  return cloned;
}

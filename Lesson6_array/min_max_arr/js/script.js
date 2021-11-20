// Разделяй и в ластах.
// 1. Создать функцию по опредилению Мах числа
// 2.пербрать массив и выделить Мах число
// 3. Создать функцию по опредилению Мin числа
// 4.пербрать массив и выделить Мin число
// 5. Создать функцию которая скалдывает Мах+Мin и проверяет условие >1000

// function getMax(arr) {
//   const maxNumber = arr;
//   for (let i = 0; i < maxNumber.length; i += 1) {
//     if (maxNumber[i] > maxNumber[0]) {
//       maxNumber[0] = maxNumber[i];
//     }
//   }
//   return maxNumber[0];
// }

// function getMin(arr) {
//   const minNumber = arr;
//   for (let i = 0; i < minNumber.length; i += 1) {
//     if (minNumber[i] < minNumber[0]) {
//       minNumber[0] = minNumber[i];
//     }
//   }
//   return minNumber[0];
// }

function getMax(arr) {
  if (!Array.isArray(arr)) {
    return null;
  }
  const maxNumber = Math.max(...arr);
  return maxNumber;
}

function getMin(arr) {
  if (!Array.isArray(arr)) {
    return null;
  }
  const minNumber = Math.min(...arr);
  console.log(minNumber);
  return minNumber;
}

function checker(arr) {
  if (!Array.isArray(arr)) {
    return null;
  }
  const checkedSum = getMax(arr) + getMin(arr);
  console.log(checkedSum);
  return checkedSum > 1000;
}

/* eslint-disable guard-for-in */
/* eslint-disable no-restricted-syntax */

// 1. Перебрать все ключи объкта
// 2. Проверить значение ключа >=18;
// 3. Значения удовлетворяющие условию записать в новый объкт

// const getAdults = obj => {
//   const newObj = {};
//   for (const value in obj) {
//     if (obj[value] >= 18) {
//       newObj[value] = obj[value];
//     }
//   }
//   return newObj;
// };

// ---------------------refactored----------------

// 1. Перебрать oбъкт в массив
// 2. отфильтровать по условию >=18;
// 3. Значения удовлетворяющие условию записать в новый массив
// 4. преобразовать массив в объект с помощью Object.fromEntries
const getAdults = obj => {
  const filter = Object.entries(obj).filter(value => value[1] >= 18);
  const newObj = Object.fromEntries(filter);
  return newObj;
};

console.log(getAdults({ Ann: 56, Andrey: 7 }));

getAdults({ Ann: 56, Andrey: 7 }); // ==> { Ann: 56 }

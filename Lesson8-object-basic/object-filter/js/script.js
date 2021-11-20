/* eslint-disable guard-for-in */
/* eslint-disable no-restricted-syntax */

// 1. Перебрать все ключи объкта
// 2. Проверить значение ключа >=18;
// 3. Значения удовлетворяющие условию записать в новый объкт

const getAdults = obj => {
  const newObj = {};
  for (const value in obj) {
    if (obj[value] >= 18) {
      newObj[value] = obj[value];
    }
  }
  return newObj;
};

console.log(getAdults({ Ann: 56, Andrey: 7 }));

getAdults({ Ann: 56, Andrey: 7 }); // ==> { Ann: 56 }

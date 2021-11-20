// 1. Итерируем объект
// 2. На каждом шаге выводим в консоль ключ
/* eslint-disable guard-for-in */
/* eslint-disable no-restricted-syntax */

const user = {
  name: 'Tom',
  age: 17,
};
function getKeys(obj) {
  for (let key in obj) {
    console.log(key);
  }
}

getKeys(user);

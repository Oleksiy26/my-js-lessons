/* eslint-disable guard-for-in */
/* eslint-disable no-restricted-syntax */

// 1. Перебрать все ключи объкта и сохранить в массив
// 2. полученный масив отфильтровать по входящему
// 3. Отфильтрованный массив преобразовать в новый объект

const pickProps = (obj, props) => {
  let arrOfKey = [];
  for (const key in obj) {
    arrOfKey = arrOfKey.concat(key);
  }
  const filtredKey = arrOfKey.filter(property => props.includes(property));
  const newObject = {};
  filtredKey.forEach(objProp => {
    for (const key in obj) {
      if (objProp === key) {
        newObject[objProp] = obj[key];
      }
    }
  });
  return newObject;
};

console.log(pickProps({ a: 1, b: 2, c: 3 }, []));

pickProps({ a: 1, b: 2, c: 3 }, ['a', 'c']); // ==> { a: 1, c: 3 }
pickProps({ a: 1, b: 2, c: 3 }, ['a', 'c', 'd', 'hex']); // ==> { a: 1, c: 3 }

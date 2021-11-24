// 1. Очищаем входной массив в этом нам поможет метод filter
// 2. Используя метод массива map наводим красоту
// 3.

const cleanTransactionsList = arr => {
  const cleaned = arr.filter(value => Number(value));
  const perfected = cleaned.map(elem => `$${Number(elem).toFixed(2)}`);
  return perfected;
};
const arr = ['  15.457  ', '28.451 dollars', '$45.2341', ' 38.00       '];
console.log(cleanTransactionsList(arr));

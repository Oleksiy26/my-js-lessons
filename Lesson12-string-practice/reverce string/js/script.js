// 1 Преобразовываем строку в массив. метод split
// 2 Разворачиваем массив reverse
// 3 Соединяем в строку join

const reverseString = str => {
  if (typeof str !== 'string') {
    return null;
  }
  const reversedStr = str.split('').reverse().join('');
  return reversedStr;
};

const text = "Sorry, we are don't know what is this";

console.log(reverseString(text));

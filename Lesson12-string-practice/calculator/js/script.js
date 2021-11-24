// 1. c помощью split разбираем строку и превращаем её в массив
// 2. деструктурируем массив для удобства дальнейшего использования
// 3. вместо if используем конструкцию switch
// 4. делаем вычисления записываем в result
// 5. возвращаем  result

const calc = expresion => {
  //  ------------- деструктуризация--------------
  const [x, operator, y] = expresion.split(' ');
  let result;
  switch (operator) {
    case '+':
      result = +x + +y;
      break;
    case '-':
      result = x - y;
      break;
    case '*':
      result = x * y;
      break;
    case '/':
      result = x / y;
      break;
    default:
      console.log(`Sorry, we are don't know what is this: ${operator}.`);
  }
  return `${expresion} = ${result}`;
};
console.log(calc('1 % 2'));

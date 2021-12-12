// algorithm

// 1. выбираем все елементы на странице с классом name
// 2. Полученный объект Nodelist преобразуем в массив с помощью Array.from
// 3. Используя метод массива map и метод dataset итерируем массив
// ,возводим в квадрат заначение data атрибута, создаем новый data атрибут
// присваиваем возведенное в квадрат заначение в новый data атрибут

export const squaredNumbers = () => {
  const myItems = document.querySelectorAll('.number');
  Array.from(myItems).map(elem => {
    const squaredValue = elem.dataset.number ** 2;
    elem.dataset.squaredNumber = squaredValue;
    return elem;
  });
};
// squaredNumbers();

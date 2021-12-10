// 1. Создаем объект и его методы
// 2. метод getFullName возвращает полное имя
// используя this считываем значения ключей обекта
// используя шаблонную строку записываем полученное значение в переменную
// возвращаем получееный результат из функции
// 3. метод setFullName принимает на вход полное имя юзера(строку)
// используя метод split разделяем строку по пробелам
// получаем массив строк
// деструктурируя полученный массив, записываем получеенные значения в ключи нашего обЪкта

// const user = {
//   firstName: 'John',
//   lastName: 'Doe',
//   getFullName() {
//     const fullName = `${this.firstName} ${this.lastName}`;
//     return fullName;
//   },
//   setFullName(fullName) {
//     const dividedFullName = fullName.split(' ');
//     [this.firstName, this.lastName] = dividedFullName;
//     return [this.firstName, this.lastName];
//   },
// };

// -------------------refactored----------

const user = {
  firstName: 'John',
  lastName: 'Doe',
  getFullName() {
    const fullName = `${this.firstName} ${this.lastName}`;
    return fullName;
  },
  setFullName(fullName) {
    [this.firstName, this.lastName] = fullName.split(' ');
    return [this.firstName, this.lastName];
  },
};

// user.setFullName('Putin Huylo');

console.log(user.setFullName('Putin Huylo'));

console.log(user.getFullName());

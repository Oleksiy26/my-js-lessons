// 1. Создать объект user с свойствами firstName, secondName
// 2. Внутри объекта создать метод который вернет имя и фамилию

export const user = {
  firstName: 'John',
  lastName: 'Doe',
  getFullName() {
    const fullName = `${this.firstName} ${this.lastName}`;
    return fullName;
  },
};

console.log(user.getFullName());

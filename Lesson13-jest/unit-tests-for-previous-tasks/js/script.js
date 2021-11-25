export const reverseArray = arr => {
  if (!Array.isArray(arr)) {
    return null;
  }
  const cloneArr = arr.slice('');
  const reversed = cloneArr.reverse();
  return reversed;
};

export const withdraw = (clients, balances, client, amount) => {
  const balance = balances.slice('');
  const index = clients.indexOf(client);
  if (index !== -1 && balance[index] < amount) {
    return -1;
  }
  return balance[index] - amount;
};
console.log(withdraw(['Ann', 'lenin', 'Den'], [950, -2, 0], 'lenin', 50));

export const getAdults = obj => {
  const filter = Object.entries(obj).filter(value => value[1] >= 18);
  const newObj = Object.fromEntries(filter);
  return newObj;
};
console.log(getAdults({ Ann: 56, Andrey: 7 }));

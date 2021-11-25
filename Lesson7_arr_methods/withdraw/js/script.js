export const withdraw = (clients, balances, client, amount) => {
  const balance = balances.slice('');
  const index = clients.indexOf(client);
  if (index !== -1 && balance[index] < amount) {
    return -1;
  }
  return balance[index] - amount;
};
console.log(withdraw(['Ann', 'lenin', 'Den'], [950, -2, 0], 'lenin', 50));

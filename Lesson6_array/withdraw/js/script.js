function withdraw(clients, balances, client, amount) {
  const balance = balances;
  const index = clients.indexOf(client);
  if (index !== -1 && balance[index] >= amount) {
    balance[index] -= amount;
    const output = balance[index];
    return output;
  }
  if (index !== -1 && balance[index] < amount) {
    const output = -1;
    return output;
  }
  return true;
}
console.log(withdraw(['Ann', 'lenin', 'Den'], [1000, -2, 0], 'Ann', 50));

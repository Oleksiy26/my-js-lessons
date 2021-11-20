function sum(from, to) {
  let total = 0;
  for (let i = from; i <= to; i += 1) {
    total += i;
  }
  return total;
}

function compareSums(firstFrom, firstTo, secondFrom, secondTo) {
  const sum1 = sum(firstFrom, firstTo);
  const sum2 = sum(secondFrom, secondTo);
  return sum1 > sum2;
}

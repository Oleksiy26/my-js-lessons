const getRandomNumbers = (length, from, to) => {
  if (Math.abs(from - to) < 1) {
    return null;
  }
  const randomNumbers = Array.from({ length }, () => {
    return Math.round(Math.random() * (to - from) + from);
  });
  return randomNumbers;
};
console.log(getRandomNumbers(5, 1.4, 3.22));

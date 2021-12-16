const getDiff = (startDate, endDate) => {
  let result = endDate - startDate;
  const days = Math.floor(result / (1000 * 60 * 60 * 24));
  const hours = Math.floor((result / (1000 * 60 * 60)) % 24);
  const minutes = Math.floor((result / (1000 * 60)) % 60);
  const seconds = Math.floor((result / 1000) % 60);
  result = `${days}d ${hours}h ${minutes}m ${seconds}s`;

  return result;
};
console.log(getDiff(new Date(), new Date(2022, 0, 26)));

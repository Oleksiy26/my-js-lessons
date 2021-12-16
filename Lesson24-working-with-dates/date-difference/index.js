const getDiff = (startDate, endDate) => {
  const result = endDate - startDate;
  console.log(endDate);
  console.log(startDate);
  console.log(result);

  const days = Math.floor(result / (1000 * 60 * 60 * 24));
  const hours = Math.floor((result / (1000 * 60 * 60)) % 24);
  const minutes = Math.floor((result / (1000 * 60)) % 60);
  const seconds = Math.floor((result / 1000) % 60);

  return `${days}d ${hours}h ${minutes}m ${seconds}s`;
};

console.log(getDiff(new Date(), new Date(2022, 0, 26)));

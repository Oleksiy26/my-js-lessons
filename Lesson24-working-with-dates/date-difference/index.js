const getDiff = (startDate, endDate) => {
  let result = 0;
  if (endDate < startDate) {
    result = startDate - endDate;
  } else {
    result = endDate - startDate;
  }

  const days = Math.floor(result / (1000 * 60 * 60 * 24));
  const hours = Math.floor((result / (1000 * 60 * 60)) % 24);
  const minutes = Math.floor((result / (1000 * 60)) % 60);
  const seconds = Math.floor((result / 1000) % 60);

  return `${days}d ${hours}h ${minutes}m ${seconds}s`;
};

console.log(getDiff(new Date(2022, 0, 26), new Date()));

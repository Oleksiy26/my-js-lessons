export const getDiff = (startDate, endDate) => {
  const result = Math.abs(endDate - startDate);
  const days = Math.floor(result / (1000 * 60 * 60 * 24));
  const hours = Math.floor((result / (1000 * 60 * 60)) % 24);
  const minutes = Math.floor((result / (1000 * 60)) % 60);
  const seconds = Math.floor((result / 1000) % 60);

  return `${days}d ${hours}h ${minutes}m ${seconds}s`;
};

console.log(getDiff(new Date(2022, 0, 26), new Date()));

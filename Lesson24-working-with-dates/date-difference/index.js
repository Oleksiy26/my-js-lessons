export const getDiff = (startDate, endDate) => {
  const result = new Date(endDate).getTime() - new Date(startDate).getTime();

  const days = Math.floor(result / (1000 * 60 * 60 * 24));
  const hours = Math.floor((result / (1000 * 60 * 60)) % 24);
  const minutes = Math.floor((result / (1000 * 60)) % 60);
  const seconds = Math.floor((result / 1000) % 60);
  const diff = `${days}d ${hours}h ${minutes}m ${seconds}s`;

  return diff;
};
// console.log(getDiff(2021, new Date(2022, 0, 26)));

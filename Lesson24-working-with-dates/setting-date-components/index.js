const weekDays = ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'St'];

export const dayOfWeek = (date, days) => {
  const day = new Date(date).getDate();
  const dateInFuture = new Date(date).setDate(day + days);
  console.log(dateInFuture);
  return weekDays[new Date(dateInFuture).getDay()];
};
console.log(dayOfWeek(new Date(2021, 11, 16), 9));

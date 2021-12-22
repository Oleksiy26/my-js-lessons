export const pinger = (num, period) => {
  let i = num;
  console.log('Ping');
  const interval = setInterval(() => {
    if (--i > 0) {
      console.log('Ping');
    } else {
      clearInterval(interval);
    }
  }, period);
};

console.log(pinger(5, 1000));

// console.log(pinger(7, 150));

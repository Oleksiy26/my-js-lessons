export const asyncCalculator = num =>
  new Promise(resolve => {
    setTimeout(() => {
      console.log(`Initial value: ${num}`);
      resolve(num);
    }, 500);
  }).then(value =>
    new Promise(resolve => {
      setTimeout(() => {
        const squared = value ** 2;
        console.log(`Squared value: ${squared}`);
        resolve(squared);
      }, 500);
    }).then(value => {
      const doubled = value * 2;
      console.log(`Doubled value: ${doubled}`);
    }),
  );

asyncCalculator(2);

const getMethodNames = {
  years: 'getFullYear',
  months: 'getMonth',
  days: 'getDate',
  hours: 'getHours',
  minutes: 'getMinutes',
  seconds: 'getSeconds',
  milliseconds: 'getMilliseconds',
};

const setMethodNames = {
  years: 'setFullYear',
  months: 'setMonth',
  days: 'setDate',
  hours: 'setHours',
  minutes: 'setMinutes',
  seconds: 'setSeconds',
  milliseconds: 'setMilliseconds',
};

export const shmoment = date => {
  let result = new Date(date);
  const calculator = {
    add(units, value) {
      const currentGetMethodName = getMethodNames[units];
      const currentUnitValue = result[currentGetMethodName]();
      result = new Date(result[setMethodNames[units]](currentUnitValue + value));
      return this;
    },
    subtract(units, value) {
      return this.add(units, -value);
    },
    result() {
      return result;
    },
  };
  return calculator;
};
console.log(
  shmoment(new Date(2021, 11, 21, 2, 37, 15, 211)).add('minutes', 50).add('months', 2).result(),
);

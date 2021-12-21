const getMethodNames = {
  years: 'getFullYear',
  month: 'getMonth',
  days: 'getDate',
  hours: 'getHours',
  minutes: 'getMinutes',
  seconds: 'getSeconds',
  milliseconds: 'getMilliseconds',
};

const setMethodNames = {
  years: 'setFullYear',
  month: 'setMonth',
  days: 'setDate',
  hours: 'setHours',
  minutes: 'setMinutes',
  seconds: 'setSeconds',
  milliseconds: 'setMilliseconds',
};

const shmoment = date => {
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
  shmoment(new Date(2021, 11, 21, 2, 37, 15, 211)).add('minutes', 50).add('days', 10).result(),
);

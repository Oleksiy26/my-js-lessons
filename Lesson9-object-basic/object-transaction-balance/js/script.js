const dayTransactions = [
  { userId: 22, amount: 60, operation: 'sell' },
  { userId: 22, amount: 160, operation: 'buy' },
  { userId: 44, amount: 90, operation: 'sell' },
];

// ==> 310

const getTotalRevenue = dayTransactions => {
  const amountArr = dayTransactions.reduce((value, obj) => {
    return value.concat(obj.amount);
  }, []);
  const result = amountArr.reduce((firstNum, secondNum) => +firstNum + +secondNum);
  return result;
};

const result = getTotalRevenue(dayTransactions);
console.log(result);

const num = 11.12556;

// const multiRound = num => {
//   const arr = [];
//   const mFloor = Math.floor(num * 100) / 100;
//   arr.push(mFloor);
//   const mTrunc = Math.trunc(num * 100) / 100;
//   arr.push(mTrunc);
//   const mCeil = Math.ceil(num * 100) / 100;
//   arr.push(mCeil);
//   const mRound = Math.round(num * 100) / 100;
//   arr.push(mRound);
//   const toFixed = +num.toFixed(2);
//   arr.push(toFixed);
//   return arr;
// };
// console.log(multiRound(num));

const multiRound = num => {
  const arr = [
    Math.floor(num * 100) / 100,
    Math.trunc(num * 100) / 100,
    Math.ceil(num * 100) / 100,
    Math.round(num * 100) / 100,
    +num.toFixed(2),
  ];
  return arr;
};

console.log(multiRound(num));

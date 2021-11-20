function getSpecialNumbers(from, to) {
  const specNum = [];
  for (let i = from; i <= to; i += 1) {
    if (i % 3 === 0) {
      specNum.push(i);
    }
  }
  return specNum;
}

// examples
getSpecialNumbers(1, 10); // ==> [3, 6, 9]
getSpecialNumbers(-10, 10); // ==> [-9, -6, -3, 0, 3, 6, 9]
getSpecialNumbers(1, 2); // ==> [ ]

function sortAsc(arr) {
  const numbers = arr;
  const minToMax = [];
  for (let i = 0; i < numbers.length; i += 1) {
    for (let j = i; j < numbers.length; j += 1) {
      if (numbers[i] > numbers[j]) {
        const temp = numbers[i];
        numbers[i] = numbers[j];
        numbers[j] = temp;
      }
    }
    minToMax.push(numbers[i]);
  }
  return minToMax;
}

function sortDesc(arr) {
  const numbers = arr;
  const maxToMin = [];
  for (let i = 0; i < numbers.length; i += 1) {
    for (let j = i; j < numbers.length; j += 1) {
      if (numbers[i] < numbers[j]) {
        const temp = numbers[i];
        numbers[i] = numbers[j];
        numbers[j] = temp;
      }
    }
    maxToMin.push(numbers[i]);
  }
  return maxToMin;
}

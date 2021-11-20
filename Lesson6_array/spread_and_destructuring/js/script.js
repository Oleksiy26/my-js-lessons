function swap(numbers) {
  const [startEl, ...rest] = numbers;
  return [...rest, startEl];
}

function swapManual(numbers) {
  const swaped = numbers.slice('');
  const startEl = swaped.shift();
  swaped.push(startEl);
  return swaped;
}

// examples

swap([1, 10, 9, 11]); // ==> [10, 9, 11, 1]
swapManual([1, 10, 9, 11]); // ==> [10, 9, 11, 1]

export const createCalculator = () => {
  let memory = 0;
  console.log(memory);

  function add(num) {
    memory += num;
    return memory;
  }

  function decrease(num) {
    memory -= num;
    return memory;
  }
  function reset() {
    memory = 0;
    return memory;
  }
  function getMemo() {
    return memory;
  }

  return { add, decrease, reset, getMemo };
};

const calc1 = createCalculator();

const calc2 = createCalculator();

console.log(calc1.add(5));

console.log(calc1.decrease(2));
console.log(calc2.add(5));
console.log(calc1.decrease(1));
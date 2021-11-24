it('17 and in Africa 17', () => {
  expect(17).toEqual(17);
});

it('18 even in Africa not jest17', () => {
  expect(18).not.toEqual(17);
});

const getEvenNumbers = numbers => numbers.filter(num => num % 2 === 0);

it('should get only even numbers from Array', () => {
  const result = getEvenNumbers([1, 2, 3, 4]);
  expect(result).toEqual([2, 4]);
});

import getSum, { getSquareArray, getOddNumbers } from './calculator';

it('getSquareArray should get squares', () => {
  const result = getSquareArray([1, 2, 3]);
  expect(result).toEqual([1, 4, 9]);
});

it('getOddNumbers should keeps odd numbers only', () => {
  const result = getOddNumbers([1, 2, 3, 4, 5]);
  expect(result).toEqual([1, 3, 5]);
});

it('should get sum of numbers', () => {
  const result = getSum(8, 4);
  expect(result).toEqual(12);
});

import calc from './calculator.js';

it('calc should plus numbers', () => {
  const result = calc('1 + 3');
  expect(result).toEqual('1 + 3 = 4');
});

it('calc should multiply numbers', () => {
  const result = calc('2 * 3');
  expect(result).toEqual('2 * 3 = 6');
});

it('calc should divide numbers', () => {
  const result = calc('10 / 2');
  expect(result).toEqual('10 / 2 = 5');
});

it('calc should subtract numbers', () => {
  const result = calc('5 - 2');
  expect(result).toEqual('5 - 2 = 3');
});

it('calc should return null if not a string', () => {
  const result = calc(5);
  expect(result).toEqual(null);
});

import { getMinSquaredNumber } from './getMinSquaredNumber';

it('getMinSquaredNumber should return null if empty Array', () => {
  const result = getMinSquaredNumber([]);
  expect(result).toEqual(null);
});

it('getMinSquaredNumber should return null if string', () => {
  const result = getMinSquaredNumber('text');
  expect(result).toEqual(null);
});

it('getMinSquaredNumber should get min squared number', () => {
  const result = getMinSquaredNumber([2, 3, 4]);
  expect(result).toEqual(4);
});

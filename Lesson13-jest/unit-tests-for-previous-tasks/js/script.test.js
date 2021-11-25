import { reverseArray } from '../../../Lesson7_arr_methods/array-reverse/js/script';
import { withdraw } from '../../../Lesson7_arr_methods/withdraw/js/script';
import { getAdults } from '../../../Lesson8-object-basic/object-filter/js/script';

// --------------------reverseArray--------------------

it('reverseArray should return null if not an Array', () => {
  const result = reverseArray('text');
  expect(result).toEqual(null);
});

it('reverseArray should return reversed Array', () => {
  const result = reverseArray([1, 2, 3]);
  expect(result).toEqual([3, 2, 1]);
});

it('reverseArray should return same length as input Array', () => {
  const result = reverseArray([1, 2, 3]);
  expect(result).toHaveLength(3);
});

// ----------withdraw-------
it('withdraw should return -1 if amount < balance', () => {
  const result = withdraw(['Ann', 'lenin', 'Den'], [950, -2, 0], 'lenin', 50);
  expect(result).toEqual(-1);
});

it('withdraw should return (balance - amount) if amount > balance', () => {
  const result = withdraw(['Ann', 'lenin', 'Den'], [950, -2, 0], 'Ann', 50);
  expect(result).toEqual(900);
});

it('withdraw should return false if wrong value of function argument  ', () => {
  const result = withdraw(['Ann', 'lenin', 'Den'], [950, -2, 0], 'Frenk', 50);
  expect(result).toBeFalsy();
});

// ---------------------------------getAdults---------------------

it('getAdults should return filtered object wich property key value > 18  ', () => {
  const result = getAdults({ Ann: 56, Andrey: 7 });
  expect(result).toStrictEqual({ Ann: 56 });
});

it('getAdults should return empty object if  all keys values < 18  ', () => {
  const result = getAdults({ Ann: 6, Andrey: 7 });
  expect(result).toEqual({});
});

it('getAdults should return filtered object wich property key value = 18  ', () => {
  const result = getAdults({ Ann: 18, Andrey: 7 });
  expect(result).toStrictEqual({ Ann: 18 });
});

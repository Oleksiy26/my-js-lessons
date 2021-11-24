const rooms = {
  room1: [{ name: 'Jack' }, { name: 'Andrey' }, { name: 'Ann' }, { name: 'Vasyl' }],
  room2: [{ name: 'Dan' }],
  room3: [{ name: 'Denis' }, { name: 'Max' }, { name: 'Alex' }],
};

const getPeople = obj => {
  const valuesArr = Object.values(obj);
  const flat = valuesArr.reduce((priveous, current) => priveous.concat(current), []);
  console.log(flat);
  const citizensObj = flat.reduce((result, item) => {
    const key = Object.values(item).concat(result);
    return key;
  }, []);
  return citizensObj.reverse();
};
console.log(getPeople(rooms));

// const arr = [{ a: 1 }, { b: 7 }, { c: 3 }];
// console.log(arr);

// const final = arr => {
//   const obj = arr.reduce((result, item) => {
//     const key = Object.keys(item)[0]; //first property: a, b, c
//     result[key] = item[key];
//     return result;
//   }, {});
//   return obj;
// };

// console.log(final(arr));

const rooms = {
  room1: [{ name: 'Jack' }, { name: 'Andrey' }, { name: 'Ann' }, { name: 'Vasyl' }],
  room2: [{ name: 'Dan' }],
  room3: [{ name: 'Denis' }, { name: 'Max' }, { name: 'Alex' }],
};

const getPeople = obj => {
  const valuesArr = Object.values(obj);
  const flat = valuesArr.reduce((priveous, current) => priveous.concat(current), []);
  const citizensObj = flat.reduce((result, item) => {
    const key = Object.values(item).concat(result);
    return key;
  }, []);
  return citizensObj.reverse();
};
console.log(getPeople(rooms));

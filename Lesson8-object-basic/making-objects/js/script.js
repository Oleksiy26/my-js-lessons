const transformToObject = arr => {
  const newObject = {};
  arr.forEach(objProp => {
    newObject[objProp] = objProp;
  });
  return newObject;
};

transformToObject(['a', 17.1, 'John Doe']); // ==> { a: 'a', '17.1': 17.1, 'John Doe': 'John Doe' }
console.log(transformToObject(['a', 17.1, 'John Doe']));

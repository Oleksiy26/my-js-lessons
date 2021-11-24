const obj1 = {
  name: 'Tom',
  age: 17,
};

const obj2 = {
  name: 'Bob',
  student: false,
};

function mergeObjectsV1(obj1, obj2) {
  const newObj = {};
  const updatedObj = Object.assign(newObj, obj1, obj2);
  return updatedObj;
}

function mergeObjectsV2(obj1, obj2) {
  const newObj = {};
  const updatedObj = Object.assign(newObj, obj2, obj1);
  return updatedObj;
}

function mergeObjectsV3(obj1, obj2) {
  const newObj = { ...obj1, ...obj2 };
  return newObj;
}
function mergeObjectsV4(obj1, obj2) {
  const newObj = { ...obj2, ...obj1 };
  return newObj;
}

console.log(mergeObjectsV1(obj1, obj2)); // ==> { name: 'Bob', age: 17, student: false }
console.log(mergeObjectsV2(obj1, obj2)); // ==> { name: 'Tom', age: 17, student: false }
console.log(mergeObjectsV3(obj1, obj2)); // ==> { name: 'Bob', age: 17, student: false }
console.log(mergeObjectsV4(obj1, obj2)); // ==> { name: 'Tom', age: 17, student: false }
// mergeObjectsV1(obj1, obj2); // ==> { name: 'Bob', age: 17, student: false }
// mergeObjectsV2(obj1, obj2); // ==> { name: 'Tom', age: 17, student: false }
// mergeObjectsV3(obj1, obj2); // ==> { name: 'Bob', age: 17, student: false }
// mergeObjectsV4(obj1, obj2); // ==> { name: 'Tom', age: 17, student: false }

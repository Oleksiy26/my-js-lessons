const userData = {
  name: 'Sam',
};

function addPropertyV1(userData, userId) {
  userData.id = userId;
  return userData;
}

function addPropertyV2(userData, userId) {
  const updatedObj = Object.assign(userData, { id: userId });
  return updatedObj;
}
function addPropertyV3(userData, userId) {
  const newData = {};
  const updatedObj = Object.assign(newData, Object.assign(userData), { id: userId });
  return updatedObj;
}
function addPropertyV4(userData, userId) {
  const newData = {};
  const updatedObj = Object.assign(newData, { ...userData }, { id: userId });
  return updatedObj;
}
console.log(addPropertyV1(userData, '1234567')); // ==> { name: 'Sam', id: '1234567' }
console.log(addPropertyV2(userData, '1234567')); // ==> { name: 'Sam', id: '1234567' }
console.log(addPropertyV3(userData, '1234567')); // ==> { name: 'Sam', id: '1234567' }
console.log(addPropertyV4(userData, '1234567')); // ==> { name: 'Sam', id: '1234567' }

/* eslint-disable guard-for-in */
/* eslint-disable no-restricted-syntax */

const concatProps = obj => {
  let propArr = [];
  for (const keyProp in obj) {
    propArr = propArr.concat(obj[keyProp]);
  }
  return propArr;
};
console.log(concatProps({ name: 'John Doe', age: 17, interest: 'football' }));
concatProps({ name: 'John Doe', age: 17, interest: 'football' }); // ==> ['John Doe', 17, 'football']

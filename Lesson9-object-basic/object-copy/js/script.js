const obj = { vasil: 17, sveta: 49, kolya: 19, petya: 21, sasha: 35 };

// const copyObj = obj => {
//   const copied = Object.assign({},obj);
//   return copied;
// };

const copyObj = obj => {
  const copied = { ...obj };
  return copied;
};

console.log(copyObj(obj));

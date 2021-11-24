// const getAdults = obj => {
//   const arrEntries = Object.entries(obj);
//   const filtredArr = arrEntries.filter(user => user[1] >= 18);
//   const adultsNames = filtredArr.map(user => user[0]);
//   return adultsNames;
// };

const getAdults = obj =>
  Object.entries(obj)
    .filter(user => user[1] >= 18)
    .map(user => user[0]);

getAdults({ vasil: 17, sveta: 49, kolya: 19, petya: 21, sasha: 35 });

console.log(getAdults({ vasil: 17, sveta: 49, kolya: 19, petya: 21, sasha: 35 }));




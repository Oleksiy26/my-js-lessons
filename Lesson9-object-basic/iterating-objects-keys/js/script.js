const obj = { vasil: 17, sveta: 49, kolya: 19, petya: 21, sasha: 35 };

function getKeys(obj) {
  const onlyKeys = Object.keys(obj).map(elem => console.log(elem));
  return onlyKeys;
}
getKeys(obj);

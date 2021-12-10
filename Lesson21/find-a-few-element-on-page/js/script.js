export const getItemsList = () => {
  const elementsList = document.querySelectorAll('.technology');
  console.dir(elementsList);
  return elementsList;
};
getItemsList();

export const getItemsArray = () => {
  const elementsArray = document.querySelectorAll('.tool');
  console.dir(elementsArray);
  return elementsArray;
};

const elemArray = Array.from(getItemsArray());
console.log(elemArray);

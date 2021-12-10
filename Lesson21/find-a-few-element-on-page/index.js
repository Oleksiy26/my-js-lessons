export const getItemsList = () => {
  const elementsList = document.querySelectorAll('.technology');
  console.dir(elementsList);
  return elementsList;
};
getItemsList();

export const getItemsArray = () => {
  const elementsArray = document.querySelectorAll('.tool');
  Array.from(elementsArray);
  console.dir(Array.from(elementsArray));
  return Array.from(elementsArray);
};

const elemArray = Array.from(getItemsArray());
console.log(elemArray);

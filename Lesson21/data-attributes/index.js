export const squaredNumbers = () => {
  const myItems = document.querySelectorAll('.number');
  Array.from(myItems).map(elem => {
    const squaredValue = elem.dataset.number ** 2;
    elem.dataset.squaredNumber = squaredValue;
    return elem;
  });
};
// squaredNumbers();

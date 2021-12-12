const inputElem = document.querySelector('.search__input');
const btnElem = document.querySelector('.search__btn');
// const onChange = () => {
//   console.log(checkboxElem.value);
// };

const onClick = () => {
  console.log(inputElem.value);
};

btnElem.addEventListener('click', onClick);

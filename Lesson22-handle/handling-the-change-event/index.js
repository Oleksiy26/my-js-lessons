const inputElem = document.querySelector('.text-input');
const onChange = () => {
  console.log(inputElem.value);
  alert(inputElem.value);
};

inputElem.addEventListener('change', onChange);

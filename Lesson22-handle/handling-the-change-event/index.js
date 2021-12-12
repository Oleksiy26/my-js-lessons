const inputElem = document.querySelector('.text-input');
const onChange = () => {
  alert(inputElem.value);
};

inputElem.addEventListener('change', onChange);

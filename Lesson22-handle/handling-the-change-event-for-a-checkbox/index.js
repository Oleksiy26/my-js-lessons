const checkboxElem = document.querySelector('.task-status');
// const onChange = () => {
//   console.log(checkboxElem.value);
// };

const onChange = () => {
  console.log(checkboxElem.checked);
};

checkboxElem.addEventListener('change', onChange);

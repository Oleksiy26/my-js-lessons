const checkboxInput = document.querySelector('.task-status');

const onChange = event => {
  console.log(event.target.checked);
};

checkboxInput.addEventListener('change', onChange);

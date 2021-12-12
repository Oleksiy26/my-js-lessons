const inputValue = document.querySelector('.text-input');

const handleChange = event => {
  console.log(event.target.value);
};

inputValue.addEventListener('change', handleChange);

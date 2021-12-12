const parant = document.querySelector('body');
const handleClick = event => {
  console.log(event.target.textContent);
};
parant.addEventListener('click', handleClick);

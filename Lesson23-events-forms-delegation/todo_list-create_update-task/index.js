// const parant = document.querySelector('body');
// const handleClick = event => {
//   console.log(event.target.textContent);
// };
// parant.addEventListener('click', handleClick);

const btn = document.querySelectorAll('.btn');

const handleClick = event => {
  console.log(event.target.textContent);
};

Array.from(btn).map(elem => {
  elem.addEventListener('click', handleClick);
  return elem;
});

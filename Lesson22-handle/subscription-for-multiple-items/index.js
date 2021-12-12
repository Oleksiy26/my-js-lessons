const btn = document.querySelectorAll('.pagination__page');

const handleClick = event => {
  console.log(event.target.dataset.pageNumber);
};

Array.from(btn).map(elem => {
  elem.addEventListener('click', handleClick);
  return elem;
});

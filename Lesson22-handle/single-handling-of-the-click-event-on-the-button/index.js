const singleClick = document.querySelector('.single-use-btn');

const oneTimeClick = () => {
  console.log('clicked');
  singleClick.removeEventListener('click', oneTimeClick);
};

singleClick.addEventListener('click', oneTimeClick);

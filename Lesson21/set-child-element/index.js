const setButton = buttonText => {
  const parant = document.querySelector('body');
  console.log(parant);
  parant.innerHTML = buttonText;
};

console.dir(setButton('<button>buton text</button>'));

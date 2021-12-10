const setButton = buttonText => {
  const parant = document.querySelector('body');
  parant.innerHTML = buttonText;
};

console.dir(setButton('<button>buton text</button>'));

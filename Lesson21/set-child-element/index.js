// const setButton = buttonText => {
//   const parant = document.querySelector('body');
//   parant.textContent = buttonText;
// };

// setButton('<button>button text</button>');

export const setButton = buttonText => {
  const parant = document.querySelector('body');
  parant.innerHTML = buttonText;
  return parant.innerHTML;
};
setButton('<button>button text</button>');

// const setButton = buttonText => {
//   const parant = document.querySelector('body');
//   parant.textContent = buttonText;
// };

// setButton('<button>button text</button>');

const setButton = buttonText => {
  const parant = document.querySelector('body');
  parant.innerHTML = buttonText;
};
setButton('<button>button text</button>');
export { setButton };
// const setButton = buttonText => {
//   const parant = document.querySelector('body');
//   parant.textContent = `<button>${buttonText}</button>`;
// };

//  setButton('button text');

export const setButton = buttonText => {
  const parant = document.querySelector('body');
  parant.innerHTML = `<button>${buttonText}</button>`;
};
// setButton('button text');

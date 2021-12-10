export const getTitle = () => {
  const titleEl = document.querySelector('.title');
  return titleEl.textContent;
};
// console.log(getTitle());

export const getDescription = () => {
  const paragraphEl = document.querySelector('.about');
  return paragraphEl.innerText;
};
// console.log(getDescription());

export const getPlans = () => {
  const paragraphElm = document.querySelector('.plans');
  const text = paragraphElm.innerText;
  return text;
};
// getPlans();

// export const getGoal = () => {
//   const paragraphElem = document.querySelector('.goal');
//   return paragraphElem.outerText;
// };
// // getGoal();

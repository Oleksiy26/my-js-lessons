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
  const paragraphEl = document.querySelector('.plans');
  return paragraphEl.innerText;
};
getPlans();

export const getGoal = () => {
  const paragraphEl = document.querySelector('.goal');
  return paragraphEl.outerText;
};
getGoal();

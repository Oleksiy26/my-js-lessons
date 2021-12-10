const getTitle = () => {
  const titleEl = document.querySelector('.title');
  return titleEl.textContent;
};
console.log(getTitle());

const getDescription = () => {
  const paragraphEl = document.querySelector('.about');
  return paragraphEl.innerText;
};
console.log(getDescription());

const getPlans = () => {
  const paragraphEl = document.querySelector('.plans');
  return paragraphEl.innerText;
};
console.log(getPlans());

const getGoal = () => {
  const paragraphEl = document.querySelector('.goal');
  return paragraphEl.outerText;
};
console.log(getGoal());

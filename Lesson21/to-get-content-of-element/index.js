const getTitle = () => {
  const titleEl = document.querySelector('.title');
  return titleEl.textContent;
};

const getDescription = () => {
  const paragraphEl = document.querySelector('.about');
  return paragraphEl.innerText;
};

const getPlans = () => {
  const paragraphElm = document.querySelector('.plans');
  return paragraphElm.innerText;
};

const getGoal = () => {
  const paragraphElem = document.querySelector('.goal');
  return paragraphElem.outerText;
};
export { getTitle, getDescription, getPlans, getGoal };

export const getTitle = () => {
  const titleEl = document.querySelector('.title');
  return titleEl.textContent;
};

export const getDescription = () => {
  const paragraphEl = document.querySelector('.about');
  return paragraphEl.innerText;
};

export const getPlans = () => {
  const paragraphElm = document.querySelector('.plans');
  return paragraphElm.innerText;
};

export const getGoal = () => {
  const paragraphElem = document.querySelector('.goal');
  return paragraphElem.outerText;
};

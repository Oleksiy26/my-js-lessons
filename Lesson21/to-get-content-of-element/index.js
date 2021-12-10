const getTitle = () => {
  const titleEl = document.querySelector('.title');
  return titleEl.textContent;
};

const getDescription = () => {
  const about = document.querySelector('.about');
  return about.innerText;
};

const getPlans = () => {
  const plans = document.querySelector('.plans');
  return plans.innerText;
};

const getGoal = () => {
  const goal = document.querySelector('.goal');
  return goal.outerText;
};
export { getTitle, getDescription, getPlans, getGoal };

export const getTitle = () => {
  const titleEl = document.querySelector('.title');
  return titleEl.textContent;
};

export const getDescription = () => {
  const about = document.querySelector('.about');
  return about.innerText;
};

export const getPlans = () => {
  const plans = document.querySelector('.plans');
  return plans.innerText;
};

export const getGoal = () => {
  const goal = document.querySelector('.goal');
  return goal.outerText;
};

export function getTitle() {
  const titleEl = document.querySelector('.title');
  return titleEl.textContent;
}

export function getDescription() {
  const about = document.querySelector('.about');
  return about.innerText;
}

export function getPlans() {
  const plans = document.querySelector('.plans');
  return plans.innerHTML;
}

export function getGoal() {
  const goal = document.querySelector('.goal');
  return goal.outerHTML;
}

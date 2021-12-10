export function setTitle(text) {
  const titleEl = document.querySelector('.title');
  titleEl.textContent = text;
  // return titleEl.textContent;
}

console.log(setTitle('I like play football'));

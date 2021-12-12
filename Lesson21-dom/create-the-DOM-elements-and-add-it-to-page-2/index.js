export function finishList() {
  const parent = document.querySelector('.list');
  const child = document.querySelector('.special');
  const missedItem1 = document.createElement('li');
  const missedItem4 = document.createElement('li');
  const missedItem6 = document.createElement('li');
  const missedItem8 = document.createElement('li');
  missedItem1.textContent = '1';
  missedItem4.textContent = '4';
  missedItem6.textContent = '6';
  missedItem8.textContent = '8';

  parent.prepend(missedItem1);
  parent.append(missedItem8);
  child.before(missedItem4);
  child.after(missedItem6);
}

// finishList();

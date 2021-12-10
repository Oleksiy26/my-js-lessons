const tasks = [
  { text: 'Buy milk', done: false },
  { text: 'Pick up Tom from airport', done: false },
  { text: 'Visit party', done: false },
  { text: 'Visit doctor', done: true },
  { text: 'Buy meat', done: true },
];

const renderTasks = tasksList => {
  const listElem = document.querySelector('.list');
  const listItemElements = tasksList.map(itemText => {
    const listItemElem = document.createElement('li');
    listItemElem.classList.add('list__item');
    if (itemText.done) {
      listItemElem.classList.add('list__item_done');
    }
    const checkBoxElem = document.createElement('input');
    checkBoxElem.setAttribute('type', 'checkbox');
    checkBoxElem.classList.add('list__item-checkbox');
    checkBoxElem.checked = itemText.done;

    listItemElem.append(checkBoxElem, itemText.text);
    return listItemElem;
  });
  return listElem.append(...listItemElements);
};

renderTasks(tasks);

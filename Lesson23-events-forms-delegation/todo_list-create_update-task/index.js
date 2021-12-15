const tasks = [
  { id: '1', text: 'Buy milk', done: false },
  { id: '2', text: 'Pick up Tom from airport', done: false },
  { id: '3', text: 'Visit party', done: false },
  { id: '4', text: 'Visit doctor', done: true },
  { id: '5', text: 'Buy meat', done: true },
];

const listElem = document.querySelector('.list');
const createNew = document.querySelector('.create-task-btn');

const renderTasks = tasksList => {
  const tasksElems = tasksList
    .sort((a, b) => a.done - b.done)
    .map(({ text, done, id }) => {
      const listItemElem = document.createElement('li');
      listItemElem.classList.add('list__item');
      const checkbox = document.createElement('input');
      checkbox.setAttribute('type', 'checkbox');
      checkbox.checked = done;
      checkbox.dataset.id = id;
      checkbox.classList.add('list__item-checkbox');
      if (done) {
        listItemElem.classList.add('list__item_done');
      }
      listItemElem.append(checkbox, text);

      return listItemElem;
    });

  listElem.append(...tasksElems);
};

renderTasks(tasks);

const hendleClick = () => {
  const inputText = document.querySelector('.task-input');
  const newEvent = {
    id: String(Math.floor(Math.random() * (20 - 6)) + 6),
    text: inputText.value,
    done: false,
  };
  if (inputText.value) {
    tasks.push(newEvent);
  }
  inputText.value = '';
  listElem.innerHTML = '';
  renderTasks(tasks);
};

const onCheked = event => {
  const isCheckbox = event.target.classList.contains('list__item-checkbox');
  if (!isCheckbox) {
    return;
  }
  const checkedItem = event.target.dataset.id;
  tasks
    .filter(elem => elem.id === String(checkedItem))
    .map(key => {
      key.done = event.target.checked;
      return key.done;
    });
  listElem.innerHTML = '';
  renderTasks(tasks);
};

listElem.addEventListener('click', onCheked);
createNew.addEventListener('click', hendleClick);

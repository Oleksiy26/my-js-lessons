// export const renderTasks = tasksList => {
//   //   listElem.innerHTML = '';
//   const tasksElems = tasksList
//     .sort((a, b) => a.done - b.done)
//     .map(({ text, done, id }) => {
//       const listItemElem = document.createElement('li');
//       listItemElem.classList.add('list__item');
//       const checkbox = document.createElement('input');
//       checkbox.setAttribute('type', 'checkbox');
//       checkbox.checked = done;
//       checkbox.dataset.id = id;
//       checkbox.classList.add('list__item-checkbox');
//       if (done) {
//         listItemElem.classList.add('list__item_done');
//       }
//       listItemElem.append(checkbox, text);

//       return listItemElem;
//     });

//   //   listElem.append(...tasksElems);
// };
// renderTasks();
import { getItem } from './storage.js';

const listElem = document.querySelector('.list');

const compareTasks = (a, b) => {
  if (a.done - b.done) {
    return a.done - b.done;
  }

  if (a.done) {
    return new Date(a.crateDate) - new Date(b.crateDate);
  }
  return new Date(b.crateDate) - new Date(a.crateDate);
};

const createCheckbox = ({ done, id }) => {
  const checkboxElem = document.createElement('input');
  checkboxElem.setAttribute('type', 'checkbox');
  checkboxElem.setAttribute('data-id', id);
  checkboxElem.checked = done;
  checkboxElem.classList.add('list__item-checkbox');
  return checkboxElem;
};

const createListItem = ({ text, done, id }) => {
  const listItemElem = document.createElement('li');
  listItemElem.classList.add('list__item');
  const checkboxElem = createCheckbox({ done, id });
  if (done) {
    listItemElem.classList.add('list__item_done');
  }
  listItemElem.append(checkboxElem, text);

  return listItemElem;
};

export const renderTasks = () => {
  const taskList = getItem('tasksList') || [];
  listElem.innerHTML = '';
  const tasksElems = taskList.sort(compareTasks).map(createListItem);
  listElem.append(...tasksElems);
};

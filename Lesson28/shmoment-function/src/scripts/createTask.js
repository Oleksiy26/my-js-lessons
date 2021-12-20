import { renderTasks } from './renderer.js';
import { getItem, setItem } from './storage.js';

export const createNewTaskHendler = () => {
  //   debugger;
  const taskTitleInputElem = document.querySelector('.task-input');
  const text = taskTitleInputElem.value;
  if (text === '') {
    return;
  }
  taskTitleInputElem.value = '';
  const tasksList = getItem('tasksList') || [];
  const newTaskList = tasksList.concat({
    text,
    done: false,
    crateDate: new Date().toISOString(),
    id: Math.random().toString(),
  });
  setItem('tasksList', newTaskList);

  renderTasks();
};

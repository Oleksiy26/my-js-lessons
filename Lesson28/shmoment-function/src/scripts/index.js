import { initToDoListHendlers } from './todoList.js';
import { renderTasks } from './renderer.js';

document.addEventListener('DOMContentLoaded', () => {
  renderTasks();
  initToDoListHendlers();
});

const onStorageChange = event => {
  if (event.key === 'taskslist') {
    renderTasks();
  }
};

window.addEventListener('storage', onStorageChange);

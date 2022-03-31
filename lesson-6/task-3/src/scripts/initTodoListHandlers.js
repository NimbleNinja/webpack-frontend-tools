import { addTask } from './addTask.js';
import { onTaskHandler } from './onTaskHandler.js';

export const initTodoListHandlers = () => {
  const createBtnElem = document.querySelector('.create-task-btn');
  createBtnElem.addEventListener('click', addTask);

  const tasksListElem = document.querySelector('.list');
  tasksListElem.addEventListener('click', onTaskHandler);
};

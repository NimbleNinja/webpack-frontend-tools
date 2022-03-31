import { createTaskElem } from './createTaskElem';
import { getTasksListFromServer } from './serverData';
import './list.scss';

// get tasks from server
// render tasks

const listElem = document.querySelector('.list');

export const renderTasks = () => {
  listElem.innerHTML = '';

  return getTasksListFromServer().then(taskList => {
    if (!taskList) {
      return;
    }

    const tasksElems = taskList
      .sort((a, b) => a.done - b.done)
      .map(({ text, done, id }) => createTaskElem(text, done, id));

    listElem.append(...tasksElems);
  });
};

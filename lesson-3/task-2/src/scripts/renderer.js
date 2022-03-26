import { createTaskElem } from './createTaskElem.js';
import { getTasksListFromServer } from './serverData.js';

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
      .map(({ text, done, id }) => {
        return createTaskElem(text, done, id);
      });

    listElem.append(...tasksElems);
  });
};

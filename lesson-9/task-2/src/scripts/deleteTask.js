// delete task from DOM
// delete task from server

import { deleteTaskFromServer } from './serverData';

export const deleteTask = elem => {
  elem.closest('.list__item').remove();

  deleteTaskFromServer(elem.dataset.id);
};

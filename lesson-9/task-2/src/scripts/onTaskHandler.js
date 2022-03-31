import { deleteTask } from './deleteTask';
import { updateTaskOnServer } from './serverData';

// input: none
// return: undefined
export const onTaskHandler = event => {
  const elem = event.target;

  // delete button
  if (elem.classList.contains('list__item-delete-btn')) {
    deleteTask(elem);
    return;
  }

  // update  task
  if (elem.type === 'checkbox') {
    const taskElem = elem.closest('.list__item');
    taskElem.classList.toggle('list__item_done');
    const spanElem = taskElem.querySelector('.list__item-text');

    const updatedTask = {
      text: spanElem.textContent,
      done: elem.checked,
      id: Number(event.target.dataset.id),
    };

    updateTaskOnServer(updatedTask);
  }
};

// update task
// toggle class .done
// fetch PUT task

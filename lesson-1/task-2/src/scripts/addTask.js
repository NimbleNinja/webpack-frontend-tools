import { createTaskElem } from './createTaskElem.js';
import { addTaskToServer } from './serverData.js';

// input: none
// return: undefined
export const addTask = () => {
  const inputElem = document.querySelector('.task-input');
  const taskText = inputElem.value;

  if (!taskText) {
    return;
  }

  const newTask = { text: taskText, done: false };

  addTaskToServer(newTask)
    .then(task => task.json())
    .then(task => {
      inputElem.value = '';
      const { text, done, id } = task;
      const taskElem = createTaskElem(text, done, id);
      document.querySelector('.list').prepend(taskElem);
    });
};

// ? create task then use fetch
// ? create task in fetch

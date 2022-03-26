import { initTodoListHandlers } from './initTodoListHandlers.js';
import { renderTasks } from './renderer.js';

document.addEventListener('DOMContentLoaded', () => {
  renderTasks().then(() => {
    initTodoListHandlers();
  });
});

// get tasks from server => render => init handlers

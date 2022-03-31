import { initTodoListHandlers } from './scripts/initTodoListHandlers.js';
import { renderTasks } from './scripts/renderer.js';
import './styles.scss';

document.addEventListener('DOMContentLoaded', () => {
  renderTasks().then(() => {
    initTodoListHandlers();
  });
});

// get tasks from server => render => init handlers

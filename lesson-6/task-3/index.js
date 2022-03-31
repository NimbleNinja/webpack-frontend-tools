import { initTodoListHandlers } from './src/scripts/initTodoListHandlers.js';
import { renderTasks } from './src/scripts/renderer.js';
import './styles.scss';

document.addEventListener('DOMContentLoaded', () => {
  renderTasks().then(() => {
    initTodoListHandlers();
  });
});

// get tasks from server => render => init handlers

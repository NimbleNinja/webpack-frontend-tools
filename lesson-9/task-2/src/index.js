import { initTodoListHandlers } from './scripts/initTodoListHandlers';
import { renderTasks } from './scripts/renderer';
import './styles.scss';

document.addEventListener('DOMContentLoaded', () => {
  renderTasks().then(() => {
    initTodoListHandlers();
  });
});

// get tasks from server => render => init handlers

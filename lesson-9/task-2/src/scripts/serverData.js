const mainUrl = 'https://6230a0d6f113bfceed572660.mockapi.io/todolist/tasks';
// const mainUrl = 'https://crudcrud.com/api/5bccca06abad4de2b50b4f57db001f7e/tasks';

export const getTasksListFromServer = () => fetch(mainUrl).then(tasks => tasks.json());

export const getTaskFromServerById = taskId => fetch(`${mainUrl}/${taskId}`).then(task => task.json());

export const addTaskToServer = task => fetch(mainUrl, {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json;charset=utf-8',
  },
  body: JSON.stringify(task),
});

export const updateTaskOnServer = task => fetch(`${mainUrl}/${task.id}`, {
  method: 'PUT',
  headers: {
    'Content-Type': 'application/json;charset=utf-8',
  },
  body: JSON.stringify(task),
});

export const deleteTaskFromServer = taskId => fetch(`${mainUrl}/${taskId}`, {
  method: 'DELETE',
  headers: {
    'Content-Type': 'application/json;charset=utf-8',
  },
});

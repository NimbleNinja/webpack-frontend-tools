export const createTaskElem = (text, done, id) => {
  const listItemElem = document.createElement('li');
  listItemElem.classList.add('list__item');

  const checkboxElem = document.createElement('input');
  checkboxElem.setAttribute('type', 'checkbox');
  checkboxElem.checked = done;
  checkboxElem.dataset.id = id;
  checkboxElem.classList.add('list__item-checkbox');

  const deleteBtn = document.createElement('button');
  deleteBtn.classList.add('list__item-delete-btn');
  deleteBtn.dataset.id = id;
  deleteBtn.textContent = '+';

  const textElem = document.createElement('span');
  textElem.classList.add('list__item-text');
  textElem.textContent = text;
  textElem.dataset.id = id;

  if (done) {
    listItemElem.classList.add('list__item_done');
  }
  listItemElem.append(checkboxElem, textElem, deleteBtn);

  return listItemElem;
};

/**
 * @jest-environment jsdom
 */

import { createTaskElem } from '../createTaskElem';

const listItemElem = createTaskElem('new task', false, '1');
const span = listItemElem.querySelector('.list__item-text');

it('check .list__item class in DOM element', () => {
  expect('list__item').toEqual(...listItemElem.classList);
});

it('check value of DOM element', () => {
  expect(span.textContent).toEqual('new task');
});

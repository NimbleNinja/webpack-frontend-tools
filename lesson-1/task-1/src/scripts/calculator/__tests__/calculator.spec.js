import { mult, sum } from '../calculator';

it('sum of two numbers', () => {
  expect(5).toEqual(sum(3, 2));
});

it('mult of two numbers', () => {
  expect(4).toEqual(mult(2, 2));
});

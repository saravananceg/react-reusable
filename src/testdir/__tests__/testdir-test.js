/* eslint-env jest */
import { addBy10 } from '../test';

describe('testing test dir', () => {
  it('test file', () => {
    expect(addBy10(5)).toBe(15);
  });
});

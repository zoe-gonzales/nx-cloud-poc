import { add } from './add';

describe('add', () => {
  it('should add two numbers', () => {
    const result = add(2, 3);
    expect(result).toEqual(5);
  });
});

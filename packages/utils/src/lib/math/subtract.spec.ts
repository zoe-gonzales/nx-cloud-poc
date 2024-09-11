import { subtract } from './subtract';

describe('subtract', () => {
  it('should subtract two numbers', () => {
    const result = subtract(12, 3);
    expect(result).toEqual(9);
  });
});

import { setNumberPages } from '../setNumberPages';

describe('setNumberPages', () => {
  it('should return 1 when total is less than or equal to max', () => {
    const result = setNumberPages({ total: 5, max: 10 });
    expect(result).toEqual(1);
  });

  it('should return 1 when total and max are equal', () => {
    const result = setNumberPages({ total: 5, max: 5 });
    expect(result).toEqual(1);
  });

  it('should return correct number of pages when total is greater than max', () => {
    const result = setNumberPages({ total: 10, max: 5 });
    expect(result).toEqual(1);
  });

  it('should return 1 when total and max are not provided', () => {
    const result = setNumberPages({});
    expect(result).toEqual(1);
  });
});
